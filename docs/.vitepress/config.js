export default{
    title: "小张文明的起源中心", // 网站标题
    description: "总有些惊喜的际遇", // 网站描述
    base: '/', // 部署时的路径(默认)
    head: [
        // 改变title的图标
        [
            'link',
            {
                rel: 'icon',
                href: '/天空实验室.png'
            }
        ]
    ],
    themeConfig:{
        siteTitle:"小张文明的起源中心",
        logo:"/1.jpg",
        nav: [
            { text: '主页', link: '/index.md' },
            { text: '项目', link: '/project/' },
            { text: '计划', link: '/plan/' },
            { text: '随笔', link: '/diary/'},
            { text: '关于', link: '/about/'}
          ],
          socialLinks: [
            { icon: 'github', link: 'https://github.com/guolizw' },
            {
                icon:{
                    svg:'<svg t="1690798613174" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8304" width="200" height="200"><path d="M514.56 9.728c-277.504 0-503.808 226.304-503.808 503.808s226.304 502.272 503.808 502.272S1018.88 789.504 1018.88 512 792.064 9.728 514.56 9.728z m0 974.336c-259.072 0-469.504-211.968-469.504-471.04S257.024 40.96 516.096 40.96s469.504 211.968 469.504 471.04-211.456 472.064-471.04 472.064z" p-id="8305"></path><path d="M771.584 812.544l13.824-135.168c-39.936 11.776-125.952 19.968-184.832 19.968-167.936 0-257.024-58.88-244.224-182.784 14.336-138.24 141.312-182.272 290.816-182.272 68.608 0 153.088 11.264 188.928 23.04l17.408-141.824c-54.272-13.312-112.128-20.992-210.432-20.992-253.952 0-485.888 118.784-507.904 329.216-18.432 176.64 138.24 310.784 428.032 310.784 101.376 0 173.568-8.192 208.384-19.968z m0 0" p-id="8306"></path></svg>'
                },
                link:'https://blog.csdn.net/guolizw?spm=1000.2115.3001.5343'
            }
                
          ],
          footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2023-present Zw'
          },
          sidebar: {
            // This sidebar gets displayed when a user
            // is on `guide` directory.
            '/diary/': [
              {
                text: '2023.8.1-present',
                collapsed: false,
                collapsible:true,
                items: [
                  { text: '2023.8.1', link: '/diary/' },
                  { text: '待定', link: '/diary/one' },
                  { text: '待定', link: '/diary/two' }
                ]
              }
            ],
      
            // This sidebar gets displayed when a user
            // is on `config` directory.
            '/about/': [
              {
                text: '关于',
                collapsed: false,
                collapsible:true,
                items: [
                  { text: '鸣谢', link: '/about/' },
                  { text: '关于我', link: '/about/one' },
                ]
              }
            ],
            '/project/':[
                {
                    text:'项目列表',
                    collapsed: false,
                    collapsible:true,
                    items: [
                        { text: '网易云音乐(Vue3+Vant+网易云API)', link: '/project/' },
                        
                      ]
                }
            ],
            '/plan/':[
                {
                    text:'计划清单',
                    collapsed: false,
                    collapsible:true,
                    items: [
                        { text: '近期目标', link: '/plan/' },
                        { text: '长期保持', link: '/plan/one'},
                        { text: '期望目标', link: '/plan/two'}
                        
                      ]
                }
            ]
          }
    }
}