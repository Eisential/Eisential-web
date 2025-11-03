// src/lib/notifications.ts
// Helpers para notificaciones en página (Notification API + timers)

import type { Task as ApiTask } from '@/src/lib/types';

// Mapa de timeouts programados por task id
const scheduledTimeouts: Map<string, number> = new Map();

export async function requestNotificationPermission(): Promise<boolean> {
  if (typeof window === 'undefined' || !('Notification' in window)) return false;
  try {
    const permission = await Notification.requestPermission();
    console.log('Notification permission result:', permission);
    return permission === 'granted';
  } catch (err) {
    console.error('Notification permission request failed', err);
    return false;
  }
}

export function clearAllScheduled() {
  for (const [, timeoutId] of scheduledTimeouts) {
    clearTimeout(timeoutId);
  }
  scheduledTimeouts.clear();
}

export function clearScheduledForTask(taskId: string) {
  const t = scheduledTimeouts.get(taskId);
  if (t !== undefined) {
    clearTimeout(t);
    scheduledTimeouts.delete(taskId);
  }
}

export function scheduleNotificationForTask(task: ApiTask, minutesBefore = 60) {
  if (typeof window === 'undefined' || !('Notification' in window)) return;
  if (!task.dueDate) return;
  if (Notification.permission !== 'granted') {
    console.debug('Notification not granted, skipping schedule for task', task.id);
    return;
  }
  try {
    const due = new Date(task.dueDate).getTime();
    const trigger = due - minutesBefore * 60 * 1000;
    const now = Date.now();

    // If trigger is in the past, do nothing
    if (trigger <= now) return;

    const ms = trigger - now;

    // Clear existing if any
    clearScheduledForTask(String(task.id));

    console.log(`Scheduling notification for task ${task.id} in ${ms} ms`);
    const timeoutId = window.setTimeout(() => {
      try {
        const title = `Recordatorio: ${task.title}`;
        const body = task.description ? `${task.description}` : 'Tienes una tarea próxima';
        const options: NotificationOptions = {
          body,
          tag: `task-${task.id}`,
        };
        new Notification(title, options);
        console.log('Displayed notification for task', task.id);
      } catch (err) {
        console.error('Error showing notification for task', task.id, err);
      }
    }, ms);

    scheduledTimeouts.set(String(task.id), timeoutId as unknown as number);
  } catch (err) {
    console.error('Error scheduling notification for task', task.id, err);
  }
}
