export const columns = [
  {
    key: 'firstName',
    label: 'FirstName',
    searchable: true,
    sortable: true
  },
  {
    key: 'lastName',
    label: 'LastName',
    searchable: true,
    sortable: true
  },
  {
    key: 'email',
    label: 'Email Address',
    searchable: true,
    sortable: true
  },
  {
    key: 'phone',
    label: 'Phone Number',
  },
  {
    key: 'createdAt',
    label: 'Created At',
    type: 'date',
    searchable: true,
    sortable: true
  },
  {
    key: 'action',
    label: 'Action',
    renderHtml: true,
  },
];

export function transformData(data: any) {
  data.forEach((item: any) => {
    item.action = `<nuxt-link to="${`users/${item._id}`}" class="table-action">View Details</nuxt-link>`;
  });
  return data;
}
