import { createStore } from 'vuex';
import { AuthModule } from './auth';
import { ConfigurationModule } from './configuration';
import { DocumentationModule } from './documentation';

import { ClientsModule } from './UserManagement/clients';
import { HostsModule } from './UserManagement/hosts';
import { AdminsModule } from './UserManagement/admins';

import { ParkingSlotsModule } from './parking_slots';
import { BookingModule } from './booking';
import { SupportsModule } from './supports';

import { RangesModule } from './range';
import { SubscriptionsModule } from './subscription';

const store = createStore({
    modules: {
        Auth: AuthModule,
        Configuration: ConfigurationModule,
        Documentation: DocumentationModule,
        Clients: ClientsModule,
        Hosts: HostsModule,
        Admins: AdminsModule,
        Ranges: RangesModule,
        Subscriptions: SubscriptionsModule,
        ParkingSlots: ParkingSlotsModule,
        Booking: BookingModule,
        Supports: SupportsModule,
    },
});

export default store;
