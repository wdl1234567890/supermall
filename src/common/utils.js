export function formatString(str, placeholder='%',...params){
  let reg = new RegExp(placeholder, 'g')
  let match = str.match(reg)
  let paramsLength = params.length
  if (match.length != paramsLength)return ''
  return str.replace(reg, (subStr) => {
    return params.shift()
  })
}

export function bounce(func, time = 100){
  let clear = null
  return function(...args){
  	if(clear)clearTimeout(clear)
    clear = setTimeout(() => {
      func(args)
    },time)
  }
}

export function dateFormat(time, format){
  let date = new Date(time * 1000)
  let fullYear = date.getFullYear()
  const yearReg = /(yy)+/
  
  if(yearReg.test(format)){
  	format = format.replace(RegExp.$1, (fullYear + '').substr(4 - RegExp.$1.length))
  }

  let regs = [
  	{
  	  reg: /(M+)/, val: date.getMonth() + 1
  	},
  	{
  	  reg: /(d+)/, 
  	  val: date.getDate()
  	},
  	{
  	  reg: /(h+)/, 
  	  val: date.getHours()
  	},
  	{
  	  reg: /(m+)/, 
  	  val: date.getMinutes()
  	},
  	{
  	  reg: /(s+)/, 
  	  val: date.getSeconds()
  	}
  ]

  let regsLength = regs.length

  for(let i = 0; i < regsLength; i++){
    if(regs[i].reg.test(format)){
      format = format.replace(RegExp.$1, addZero(RegExp.$1, regs[i].val))
    }
  }

  return format
}

function addZero(match, val){
  if(match.length == 1)return val
  val = val + ''
  return ('00' + val).substr(val.length)
}