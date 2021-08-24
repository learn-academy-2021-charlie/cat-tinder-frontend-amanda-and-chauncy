import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NotFound from '../NotFound'


Enzyme.configure({ adapter: new Adapter() })

describe('when the page renders, see Not Found msg', ()=>{
    it('displays HTTP ERROR 404: Page Not Found', ()=>{
      const notFound = shallow(<NotFound />)
      const renderedNotFoundMsg = notFound.find("h3")
      console.log("not found msg debug", renderedNotFoundMsg.debug())
      console.log("not found props,", renderedNotFoundMsg.props())
      expect(renderedNotFoundMsg.props().className).toEqual('not-found')
    })
})