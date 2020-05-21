export const state = (x) => ({get:()=>x,set:(y)=>x=y})

export const acts = (obj={}) => ({
  sub:(act)=>(fn)=>Object.assign(obj,{[act]:fn}),
  pub:(act)=>obj[act]
})

export const pipe = (...fns) => (x) => fns.reduce((a,c)=>c(a),x)

const of = ($) => ({$})

const flat = ({$}) => $

const map = (fn) => ({$}) => lift(fn($))

const chain = (fn) => pipe(flat,map(fn))

const maybe = (p) => (fn) => ({$}) => (p($)) ? lift(fn($)) : lift($)

export const Nomad = {of,map,chain,maybe}
