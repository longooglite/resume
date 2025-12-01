import IconDemo from '../../src/components/IconDemo.vue'

describe('IconDemo component', () => {
  it('renders phosphor icons', () => {
    cy.mount(IconDemo)
    cy.contains('Phosphor Icon Demo')
  })
})


