const _ = require('lodash')

const arr = [{
  label: '文本',
  target: 'text',
  type: 'input',
},
{
  label: '宽度',
  target: 'style.width',
  type: 'input',
},
{
  label: '高度',
  target: 'style.height',
  type: 'input',
},
{
  label: '大小',
  target: 'size',
  type: 'select',
  options: [
    {
      label: 'small',
      value: 'small'
    },
    {
      label: 'medium',
      value: 'medium'
    },
    {
      label: 'large',
      value: 'large'
    }
  ],
}]

