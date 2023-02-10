import { createSelector } from "reselect";

import appointmentsSelector from "../appointments/appointmentsSelector";

const getProviders = (state: any) => state.clinics.providers;

const providersSelector = createSelector(
  [getProviders, appointmentsSelector],
  (providers, appointments) => {
    const providersData = appointments.map((appointment: any) => {
      const provider = providers.find(
        (provider: any) => provider.id === appointment.clinicId
      );
      return {
        address: provider.address,
        city: provider.city,
        name: provider.name,
        state: provider.state,
        zipCode: provider.zipcode,
        ...appointment,
      };
    });

    return {
      providersData,
    };
  }
);

export default providersSelector;
