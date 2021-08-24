import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Home from '../Home'

Enzyme.configure({ adapter: new Adapter()})

describe("When the Home page Loads ...", () => {
    let home
    beforeEach(() => {
        home = shallow(<Home/>)
    })
    it('Displays an <h2>', () => {
        const h2 = home.find('h2')

        expect(h2.length).toEqual(1)
    })
})