import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Footer from '../Footer'

Enzyme.configure({ adapter: new Adapter()})

describe("When the Footer Loads ...", () => {
    let footer
    beforeEach(() => {
        footer = shallow(<Footer/>)
    })
    it('Displays a unordered list as links', () => {
        const link = footer.find('NavLink')
        expect(link.length).toEqual(3)
    })
})