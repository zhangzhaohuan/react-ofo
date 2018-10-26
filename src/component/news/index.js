import React, { Component } from 'react'

export default class News extends Component {

  render() {
    return (
      <div className='ofo_news content'>
        <header>
          <nav>
            <ul>
              <li onClick={() => { this.props.history.push('/') }}>首页</li>
              <li className='ofo_nav_news ofo_nav_active'>新闻</li>
              <li onClick={() => { this.props.history.push('/abouts') }}>关于</li>
              <li onClick={() => { this.props.history.push('/cooperation') }}>商业合作</li>
            </ul>
          </nav>
          <img
            className='titile'
            src="http://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/logo_black.svg" alt="" />
        </header>
        <div className="middle" style={{ width: '100vw', height: '1000px', background: 'red' }}>
        </div>
      </div>
    )
  }
}
