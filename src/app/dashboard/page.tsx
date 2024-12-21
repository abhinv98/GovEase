import React from 'react';
import Greeting from '@/components/dashboard/Greeting';
import QuickAccess from '@/components/dashboard/QuickAccess';
import Notifications from '@/components/dashboard/Notifications';
import StatusUpdates from '@/components/dashboard/StatusUpdates';

export default function DashboardPage() {
  // In a real application, this would come from your auth/user context
  const userData = {
    name: 'Rajesh Kumar',
    pendingTasks: 5
  };

  return (
    <div className="space-y-8">
      {/* Greeting Section */}
      <Greeting 
        userName={userData.name}
        pendingTasks={userData.pendingTasks}
      />

      {/* Quick Access Grid */}
      <section>
        <QuickAccess />
      </section>

      {/* Two Column Layout for Updates */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Status Updates */}
        <section>
          <StatusUpdates />
        </section>

        {/* Notifications */}
        <section>
          <Notifications />
        </section>
      </div>
    </div>
  );
}
