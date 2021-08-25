import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import AnimalShow from '../AnimalShow'

Enzyme.configure({ adapter: new Adapter()})

describe("When the AnimalShow page Loads ...", () => {
    let animalShow
    beforeEach(() => {
        animalShow = shallow(<AnimalShow/>)
    })
    it('Displays an animal', () => {
        const animal = animalShow.find('div')

        expect(animal.length).toEqual(1)
    })
})