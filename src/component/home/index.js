import React, { Component } from 'react'

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      scrollTop: true  //滚动条在顶部
    }
  }

  componentDidMount() {
    console.log(this.props.location);
    document.addEventListener('scroll', () => {
      document.documentElement.scrollTop == 0 ? this.setState({ scrollTop: true }) : this.setState({ scrollTop: false })
    })
  }

  render() {
    return (
      <div className='ofo_home content'>
        <header className={this.state.scrollTop ? '' : 'scrolled'}>
          <nav className={this.state.scrollTop ? 'ofo_home_nav' : ''}>
            <ul>
              <li className='ofo_nav_home ofo_nav_active'>首页</li>
              <li onClick={() => { this.props.history.push('/news') }}>新闻</li>
              <li onClick={() => { this.props.history.push('/abouts') }}>关于</li>
              <li onClick={() => { this.props.history.push('/cooperation') }}>商业合作</li>
            </ul>
          </nav>
          <img
            className='titile'
            src={this.state.scrollTop ? "http://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/logo_white.svg" :
              "http://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/logo_black.svg"}
          />
          <div className='ofo_home_header_line'></div>
        </header>
        <video
          src="http://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/new.mp4"
          muted="muted"
          autoPlay="autoplay"
          loop="loop"
          className="mainVideo"
        ></video>
        <div className="ofo_home_tip">
          <img className='circle1' src={require('assets/feed_title_round_1.svg')} alt="" />
          <img className='title' src="http://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/feed_title.svg" alt="" />
          <p className="text">我们已服务于全球21个国家，超过250座城市，2亿用户</p>
          <img src="http://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/feed_title_round_2.svg" alt="" className="circle2"></img>
        </div>
        <div className="know_more">
          <img className='know_more_img'
            src="http://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/arrows.svg" alt="" />
          <p onClick={() => { window.scrollTo(0, (0.5625-0.05) * document.documentElement.clientWidth) }}>了解更多</p>
        </div>
        <div className="middle" style={{width:'100vw',height:'1000px',background:'red'}}>
          <div className="middle_1"></div>
          <div className="middle_2"></div>
          <div className="middle_3"></div>
        </div>
      </div>
    )
  }
}
