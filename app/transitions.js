export default function(){
  // Add your transitions here, like:
  //   this.transition(
  //     this.fromRoute('people.index'),
  //     this.toRoute('people.detail'),
  //     this.use('toLeft'),
  //     this.reverse('toRight')
  //   );
  this.transition(
    this.toRoute('video'),
    this.use('toLeft'),
  )
  this.transition(
    this.toRoute('index'),
    this.use('toRight')
  )
}
