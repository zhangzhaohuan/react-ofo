import React, { Component } from 'react'

export default class Cooperation extends Component {
  render() {
    return (
      <div className='ofo_cooperation content'>
        <header>
          <nav>
            <ul>
              <li onClick={() => { this.props.history.push('/') }}>首页</li>
              <li onClick={() => { this.props.history.push('/news') }}>新闻</li>
              <li onClick={() => { this.props.history.push('/abouts') }}>关于</li>
              <li className='ofo_nav_cooperation ofo_nav_active'>商业合作</li>
            </ul>
          </nav>
          <img
            className='titile'
            src="http://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/logo_black.svg" alt="" />
        </header>

      </div>
    )
  }
}
