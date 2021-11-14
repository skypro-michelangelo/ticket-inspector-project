const backendDomain = 'http://localhost:5000';

export const api = {
  checkTicket: async function (id: string) {
    const response = await fetch(`${backendDomain}/events/ticket/${id}/validate`);
    return response;
  },
};
