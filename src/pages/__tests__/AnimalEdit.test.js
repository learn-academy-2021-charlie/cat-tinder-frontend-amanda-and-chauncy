import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import AnimalEdit from '../AnimalEdit'

Enzyme.configure({ adapter: new Adapter()})

describe("When the AnimalEdit page Loads ...", () => {
    let animalEdit
    beforeEach(() => {
        animalEdit = shallow(<AnimalEdit/>)
    })
    it('Displays an input', () => {
        const form = animalEdit.find('Form')

        expect(form.length).toEqual(1)
    })
})