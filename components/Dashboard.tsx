import React from 'react';

interface DashboardProps {
  user: { name: string; phone: string } | null;
  onOrderClick: () => void;
  onSettingsClick: () => void;
  onSupportClick: () => void;
  onTopUpClick: () => void;
  onHistoryClick: () => void;
  onAddLocationClick: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ 
  user, 
  onOrderClick, 
  onSettingsClick, 
  onSupportClick, 
  onTopUpClick, 
  onHistoryClick,
  onAddLocationClick
}) => {
  return (
    <div className="pt-24 pb-12 min-h-screen bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Welcome Section */}
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4 animate-float-sm" style={{ animationDuration: '1s' }}>
          <div>
            <h1 className="text-3xl md:text-4xl font-display font-bold text-contrast">
              Good morning, {user?.name.split(' ')[0]}!
            </h1>
            <p className="text-dim mt-1">Here's what's happening with your water supply today.</p>
          </div>
          <div className="text-right hidden md:block">
            <p className="text-sm font-bold text-contrast bg-surface px-4 py-2 rounded-full border border-border-line">
              {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          
          {/* Wallet Card */}
          <div className="bg-surface border border-border-line rounded-3xl p-6 relative overflow-hidden group hover:border-primary/30 transition-all duration-300">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-8xl text-primary">account_balance_wallet</span>
            </div>
            <div className="relative z-10">
              <p className="text-dim text-sm font-bold uppercase tracking-wider mb-2">Wallet Balance</p>
              <h2 className="text-4xl font-display font-bold text-contrast mb-4">ETB 450.00</h2>
              <div className="flex gap-2">
                <button 
                  onClick={onTopUpClick}
                  className="bg-primary hover:bg-accent text-white px-4 py-2 rounded-lg text-sm font-bold transition-colors shadow-lg shadow-primary/20"
                >
                  Top Up
                </button>
                <button 
                  onClick={onHistoryClick}
                  className="bg-background border border-border-line text-contrast px-4 py-2 rounded-lg text-sm font-bold hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                >
                  History
                </button>
              </div>
            </div>
          </div>

          {/* Quick Order Card */}
          <div className="bg-gradient-to-br from-primary to-midnight rounded-3xl p-6 relative overflow-hidden text-white shadow-xl shadow-primary/20 group cursor-pointer" onClick={onOrderClick}>
            <div className="absolute -bottom-4 -right-4 bg-white/10 w-32 h-32 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <p className="text-white/80 text-sm font-bold uppercase tracking-wider">Quick Order</p>
                  <span className="bg-white/20 p-1.5 rounded-lg backdrop-blur-sm group-hover:bg-white/30 transition-colors">
                    <span className="material-symbols-outlined text-lg">water_drop</span>
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-1">Running low?</h3>
                <p className="text-white/80 text-sm">Reorder your usual 5 Jars.</p>
              </div>
              <button 
                className="mt-6 w-full bg-white text-midnight font-bold py-3 rounded-xl hover:bg-white/90 transition-colors flex items-center justify-center gap-2"
              >
                Order Now
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </div>
          </div>

          {/* Sensor Status Card */}
          <div className="bg-surface border border-border-line rounded-3xl p-6 flex flex-col justify-between hover:border-primary/30 transition-colors">
            <div className="flex justify-between items-start mb-4">
               <div>
                 <p className="text-dim text-sm font-bold uppercase tracking-wider mb-1">Sensor Status</p>
                 <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="text-contrast font-bold">Online</span>
                 </div>
               </div>
               <span className="material-symbols-outlined text-dim">router</span>
            </div>
            
            <div className="flex items-end justify-between">
              <div>
                <span className="text-4xl font-display font-bold text-contrast">78%</span>
                <p className="text-xs text-dim mt-1">Tank Level • Updated 5m ago</p>
              </div>
              <div className="h-16 w-1/2 bg-background rounded-lg border border-border-line relative overflow-hidden flex items-end">
                 <div className="w-full bg-primary/20 h-[78%] relative transition-all duration-1000">
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-primary/50"></div>
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
                 </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content: Active Delivery */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-xl font-bold text-contrast">Active Delivery</h3>
            
            {/* Map Placeholder / Tracking Card */}
            <div className="bg-surface border border-border-line rounded-3xl overflow-hidden group">
               <div className="bg-background/50 h-48 relative flex items-center justify-center border-b border-border-line">
                  {/* Pattern background to simulate map */}
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #37B9C7 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-surface/50 to-transparent"></div>
                  
                  <div className="text-center relative z-10">
                    <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="material-symbols-outlined text-3xl">local_shipping</span>
                    </div>
                    <p className="text-dim text-sm font-medium">No active orders right now</p>
                  </div>
               </div>
               
               <div className="p-6">
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-12 bg-background border border-border-line rounded-full flex items-center justify-center text-dim group-hover:border-primary/50 group-hover:text-primary transition-colors">
                        <span className="material-symbols-outlined">person_off</span>
                     </div>
                     <div>
                        <h4 className="font-bold text-contrast">No Driver Assigned</h4>
                        <p className="text-sm text-dim">Place an order to track delivery in real-time</p>
                     </div>
                  </div>
               </div>
            </div>

            {/* Recent Activity */}
            <div>
               <div className="flex justify-between items-center mb-4">
                 <h3 className="text-xl font-bold text-contrast">Recent Activity</h3>
                 <button onClick={onHistoryClick} className="text-primary text-sm font-bold hover:underline">View All</button>
               </div>
               
               <div className="bg-surface border border-border-line rounded-3xl overflow-hidden">
                  <div className="p-4 border-b border-border-line hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer flex items-center justify-between group">
                     <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                           <span className="material-symbols-outlined text-xl">check</span>
                        </div>
                        <div>
                           <p className="font-bold text-contrast text-sm">Order Delivered</p>
                           <p className="text-xs text-dim">Sep 24, 2024 • 5 Jars</p>
                        </div>
                     </div>
                     <span className="font-mono font-bold text-contrast">- ETB 150.00</span>
                  </div>
                  <div className="p-4 border-b border-border-line hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer flex items-center justify-between group">
                     <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                           <span className="material-symbols-outlined text-xl">add</span>
                        </div>
                        <div>
                           <p className="font-bold text-contrast text-sm">Wallet Top Up</p>
                           <p className="text-xs text-dim">Sep 20, 2024 • Telebirr</p>
                        </div>
                     </div>
                     <span className="font-mono font-bold text-green-500">+ ETB 500.00</span>
                  </div>
                  <div className="p-4 hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer flex items-center justify-between group">
                     <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                           <span className="material-symbols-outlined text-xl">history</span>
                        </div>
                        <div>
                           <p className="font-bold text-contrast text-sm">Order #2284</p>
                           <p className="text-xs text-dim">Sep 15, 2024 • 10 Jars</p>
                        </div>
                     </div>
                     <span className="font-mono font-bold text-contrast">- ETB 300.00</span>
                  </div>
               </div>
            </div>
          </div>

          {/* Sidebar: Profile & Addresses */}
          <div className="space-y-6">
             <div className="bg-surface border border-border-line rounded-3xl p-6">
                <div className="text-center mb-6">
                   <div className="w-20 h-20 bg-primary/20 text-primary rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-3 shadow-inner">
                      {user?.name.charAt(0)}
                   </div>
                   <h3 className="font-bold text-contrast text-lg">{user?.name}</h3>
                   <p className="text-dim text-sm">{user?.phone}</p>
                   <div className="mt-3 inline-block px-3 py-1 bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 rounded-full text-xs font-bold uppercase tracking-wider border border-yellow-500/20">
                      Gold Member
                   </div>
                </div>
                
                <div className="space-y-3">
                   <button 
                     onClick={onSettingsClick}
                     className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-background border border-transparent hover:border-border-line transition-all group"
                   >
                      <div className="flex items-center gap-3">
                         <span className="material-symbols-outlined text-dim group-hover:text-primary transition-colors">settings</span>
                         <span className="text-sm font-medium text-contrast">Settings</span>
                      </div>
                      <span className="material-symbols-outlined text-dim text-sm">chevron_right</span>
                   </button>
                   <button 
                     onClick={onSupportClick}
                     className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-background border border-transparent hover:border-border-line transition-all group"
                   >
                      <div className="flex items-center gap-3">
                         <span className="material-symbols-outlined text-dim group-hover:text-primary transition-colors">help</span>
                         <span className="text-sm font-medium text-contrast">Support</span>
                      </div>
                      <span className="material-symbols-outlined text-dim text-sm">chevron_right</span>
                   </button>
                </div>
             </div>

             {/* Saved Addresses */}
             <div className="bg-surface border border-border-line rounded-3xl p-6">
                <div className="flex justify-between items-center mb-4">
                   <h4 className="font-bold text-contrast text-sm uppercase tracking-wider">My Locations</h4>
                   <button 
                     onClick={onAddLocationClick}
                     className="text-primary hover:text-accent transition-colors"
                   >
                      <span className="material-symbols-outlined">add_circle</span>
                   </button>
                </div>
                
                <div className="space-y-3">
                   <div className="flex items-center gap-3 p-3 bg-background rounded-xl border border-border-line hover:border-primary/50 transition-colors cursor-pointer group">
                      <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">home</span>
                      <div className="flex-1">
                         <p className="text-sm font-bold text-contrast">Home</p>
                         <p className="text-xs text-dim truncate">Bole, Woreda 03, House 455</p>
                      </div>
                      <span className="material-symbols-outlined text-dim text-sm opacity-0 group-hover:opacity-100 transition-opacity">edit</span>
                   </div>
                   <div className="flex items-center gap-3 p-3 bg-background rounded-xl border border-border-line opacity-60 hover:opacity-100 transition-all cursor-pointer group">
                      <span className="material-symbols-outlined text-dim group-hover:text-primary transition-colors">work</span>
                      <div className="flex-1">
                         <p className="text-sm font-bold text-contrast">Office</p>
                         <p className="text-xs text-dim truncate">Kazanchis, Bloom Tower, 4th Floor</p>
                      </div>
                      <span className="material-symbols-outlined text-dim text-sm opacity-0 group-hover:opacity-100 transition-opacity">edit</span>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;