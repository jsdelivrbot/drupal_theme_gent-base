'use strict';

module.exports = {
  title: 'Checkbox',
  status: 'beta',
  handle: 'checkbox',
  collated: true,
  context: {
    label: 'Label checkbox',
    label_optional: 'Optional',

    field_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet, urna sit amet convallis rhoncus, felis ex pellentesque neque, nec ultrices dui enim ut diam. Nam pellentesque velit pharetra, accumsan ante at, gravida turpis. Cras venenatis velit ut ipsum molestie pretium. Vivamus tellus metus, pretium eu nibh vitae, eleifend luctus dolor. Morbi feugiat tristique ante eu egestas. Nunc ligula magna, fringilla sed consequat id, pellentesque at risus. Nunc ex elit, tincidunt at lorem vel, mattis gravida nisl. Praesent sodales nibh massa, id ultrices metus viverra id.',
    field_message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet, urna sit amet convallis rhoncus, felis ex.',
    description: 'Description checkboxes.',

    options: [
      {
        label_checkbox: 'Checkbox option 1',
        checkbox_name: 'checkboxgroup',
        checkbox_id: 'checkbox-1'
      },
      {
        label_checkbox: 'Checkbox option 2',
        checkbox_name: 'checkboxgroup',
        checkbox_id: 'checkbox-2'
      }
    ]
  },
  variants: [
    {
      name: 'default',
      handle: 'checkbox'
    },
    {
      name: 'with-error',
      context: {
        modifier: 'error',
        options: [
          {
            label_checkbox: 'Checkbox option 1',
            checkbox_name: 'checkboxgroup-error',
            checkbox_id: 'checkbox-error-1'
          },
          {
            label_checkbox: 'Checkbox option 2',
            checkbox_name: 'checkboxgroup-error',
            checkbox_id: 'checkbox-error-2'
          }
        ]
      }
    },
    {
      name: 'with-success',
      context: {
        modifier: 'success',
        options: [
          {
            label_checkbox: 'Checkbox option 1',
            checkbox_name: 'checkboxgroup-success',
            checkbox_id: 'checkbox-success-1'
          },
          {
            label_checkbox: 'Checkbox option 2',
            checkbox_name: 'checkboxgroup-success',
            checkbox_id: 'checkbox-success-2'
          }
        ]
      }
    }
  ]
};
