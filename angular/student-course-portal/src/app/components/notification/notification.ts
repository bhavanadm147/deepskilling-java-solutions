import { Component } from '@angular/core';
import { NotificationService } from '../../services/notification';

@Component({
  selector: 'app-notification',
  imports: [],
  templateUrl: './notification.html',
  styleUrl: './notification.css',

  // Component-level provider creates a separate NotificationService
  // instance scoped to this component and its child components.
  // It does not use the application's root singleton instance.
  providers: [NotificationService]
})
export class Notification {

  constructor(
    public notificationService: NotificationService
  ) {}

}