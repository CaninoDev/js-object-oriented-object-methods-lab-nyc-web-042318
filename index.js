function BoardMember (nm, hmestte, trng) {
  this.name = nm
  this.homeState = hmestte
  this.training = trng
  this.veto = function () { return 'No, I must disagree' }
  this.approve = function () { return 'You can do that!' }
  this.doCharity = function () { return 'I like to help people.' }
  this.releasePressStatement = function () { return 'You will see great things from Scuber.' }
  this.sayHi = function () { return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.` }
}