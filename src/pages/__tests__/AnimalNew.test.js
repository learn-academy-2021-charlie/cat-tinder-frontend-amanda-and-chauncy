import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import AnimalNew from '../AnimalNew'

Enzyme.configure({ adapter: new Adapter()})

describe("When the AnimalNew page Loads ...", () => {
    let animalNew
    beforeEach(() => {
        animalNew = shallow(<AnimalNew/>)
    })
    it('Displays an input', () => {
        const form = animalNew.find('Input')

        expect(form.length).toEqual(4)
    })
})