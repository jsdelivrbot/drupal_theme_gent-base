'use strict';

module.exports = {
  title: 'Radio',
  status: 'beta',
  handle: 'radio',
  collated: true,
  context: {
    label: 'Label radiobuttons',
    label_optional: 'Optional',

    field_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet, urna sit amet convallis rhoncus, felis ex pellentesque neque, nec ultrices dui enim ut diam. Nam pellentesque velit pharetra, accumsan ante at, gravida turpis. Cras venenatis velit ut ipsum molestie pretium. Vivamus tellus metus, pretium eu nibh vitae, eleifend luctus dolor. Morbi feugiat tristique ante eu egestas. Nunc ligula magna, fringilla sed consequat id, pellentesque at risus. Nunc ex elit, tincidunt at lorem vel, mattis gravida nisl. Praesent sodales nibh massa, id ultrices metus viverra id.',
    field_message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet, urna sit amet convallis rhoncus, felis ex.',
    description: 'Description radiobuttons.',

    options: [
      {
        label_radio: 'Radio option 1',
        radio_name: 'radiogroup',
        radio_id: 'radio-1'
      },
      {
        label_radio: 'Radio option 2',
        radio_name: 'radiogroup',
        radio_id: 'radio-2'
      }
    ]
  },
  variants: [
    {
      name: 'default',
      handle: 'radio'
    },
    {
      name: 'with-error',
      context: {
        modifier: 'error',
        options: [
          {
            label_radio: 'Radio option 1',
            radio_name: 'radiogroup-error',
            radio_id: 'radio-error-1'
          },
          {
            label_radio: 'Radio option 2',
            radio_name: 'radiogroup-error',
            radio_id: 'radio-error-2'
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
            label_radio: 'Radio option 1',
            radio_name: 'radiogroup-success',
            radio_id: 'radio-success-1'
          },
          {
            label_radio: 'Radio option 2',
            radio_name: 'radiogroup-success',
            radio_id: 'radio-success-2'
          }
        ]
      }
    }
  ]
};
