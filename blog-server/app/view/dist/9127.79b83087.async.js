(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[9127],{89127:function(e,n,r){"use strict";r.r(n),n.default=`---\r
title: \u4E1A\u52A1\u7EC4\u4EF6\r
sidemenu: false\r
---\r
\r
> \u6B64\u529F\u80FD\u7531[dumi](https://d.umijs.org/zh-CN/guide/advanced#umi-%E9%A1%B9%E7%9B%AE%E9%9B%86%E6%88%90%E6%A8%A1%E5%BC%8F)\u63D0\u4F9B\uFF0Cdumi \u662F\u4E00\u4E2A \u{1F4D6} \u4E3A\u7EC4\u4EF6\u5F00\u53D1\u573A\u666F\u800C\u751F\u7684\u6587\u6863\u5DE5\u5177\uFF0C\u7528\u8FC7\u7684\u90FD\u8BF4\u597D\u3002\r
\r
# \u4E1A\u52A1\u7EC4\u4EF6\r
\r
\u8FD9\u91CC\u5217\u4E3E\u4E86 Pro \u4E2D\u6240\u6709\u7528\u5230\u7684\u7EC4\u4EF6\uFF0C\u8FD9\u4E9B\u7EC4\u4EF6\u4E0D\u9002\u5408\u4F5C\u4E3A\u7EC4\u4EF6\u5E93\uFF0C\u4F46\u662F\u5728\u4E1A\u52A1\u4E2D\u5374\u771F\u5B9E\u9700\u8981\u3002\u6240\u4EE5\u6211\u4EEC\u51C6\u5907\u4E86\u8FD9\u4E2A\u6587\u6863\uFF0C\u6765\u6307\u5BFC\u5927\u5BB6\u662F\u5426\u9700\u8981\u4F7F\u7528\u8FD9\u4E2A\u7EC4\u4EF6\u3002\r
\r
## Footer \u9875\u811A\u7EC4\u4EF6\r
\r
\u8FD9\u4E2A\u7EC4\u4EF6\u81EA\u5E26\u4E86\u4E00\u4E9B Pro \u7684\u914D\u7F6E\uFF0C\u4F60\u4E00\u822C\u90FD\u9700\u8981\u6539\u6389\u5B83\u7684\u4FE1\u606F\u3002\r
\r
\`\`\`tsx\r
/**\r
 * background: '#f0f2f5'\r
 */\r
import React from 'react';\r
import Footer from '@/components/Footer';\r
\r
export default () => <Footer />;\r
\`\`\`\r
\r
## HeaderDropdown \u5934\u90E8\u4E0B\u62C9\u5217\u8868\r
\r
HeaderDropdown \u662F antd Dropdown \u7684\u5C01\u88C5\uFF0C\u4F46\u662F\u589E\u52A0\u4E86\u79FB\u52A8\u7AEF\u7684\u7279\u6B8A\u5904\u7406\uFF0C\u7528\u6CD5\u4E5F\u662F\u76F8\u540C\u7684\u3002\r
\r
\`\`\`tsx\r
/**\r
 * background: '#f0f2f5'\r
 */\r
import { Button, Menu } from 'antd';\r
import React from 'react';\r
import HeaderDropdown from '@/components/HeaderDropdown';\r
\r
export default () => {\r
  const menuHeaderDropdown = (\r
    <Menu selectedKeys={[]}>\r
      <Menu.Item key="center">\u4E2A\u4EBA\u4E2D\u5FC3</Menu.Item>\r
      <Menu.Item key="settings">\u4E2A\u4EBA\u8BBE\u7F6E</Menu.Item>\r
      <Menu.Divider />\r
      <Menu.Item key="logout">\u9000\u51FA\u767B\u5F55</Menu.Item>\r
    </Menu>\r
  );\r
  return (\r
    <HeaderDropdown overlay={menuHeaderDropdown}>\r
      <Button>hover \u5C55\u793A\u83DC\u5355</Button>\r
    </HeaderDropdown>\r
  );\r
};\r
\`\`\`\r
\r
## HeaderSearch \u5934\u90E8\u641C\u7D22\u6846\r
\r
\u4E00\u4E2A\u5E26\u8865\u5168\u6570\u636E\u7684\u8F93\u5165\u6846\uFF0C\u652F\u6301\u6536\u8D77\u548C\u5C55\u5F00 Input\r
\r
\`\`\`tsx\r
/**\r
 * background: '#f0f2f5'\r
 */\r
import { Button, Menu } from 'antd';\r
import React from 'react';\r
import HeaderSearch from '@/components/HeaderSearch';\r
\r
export default () => {\r
  return (\r
    <HeaderSearch\r
      placeholder="\u7AD9\u5185\u641C\u7D22"\r
      defaultValue="umi ui"\r
      options={[\r
        { label: 'Ant Design Pro', value: 'Ant Design Pro' },\r
        {\r
          label: 'Ant Design',\r
          value: 'Ant Design',\r
        },\r
        {\r
          label: 'Pro Table',\r
          value: 'Pro Table',\r
        },\r
        {\r
          label: 'Pro Layout',\r
          value: 'Pro Layout',\r
        },\r
      ]}\r
      onSearch={(value) => {\r
        console.log('input', value);\r
      }}\r
    />\r
  );\r
};\r
\`\`\`\r
\r
### API\r
\r
| \u53C2\u6570            | \u8BF4\u660E                               | \u7C7B\u578B                         | \u9ED8\u8BA4\u503C |\r
| --------------- | ---------------------------------- | ---------------------------- | ------ |\r
| value           | \u8F93\u5165\u6846\u7684\u503C                         | \`string\`                     | -      |\r
| onChange        | \u503C\u4FEE\u6539\u540E\u89E6\u53D1                       | \`(value?: string) => void\`   | -      |\r
| onSearch        | \u67E5\u8BE2\u540E\u89E6\u53D1                         | \`(value?: string) => void\`   | -      |\r
| options         | \u9009\u9879\u83DC\u5355\u7684\u7684\u5217\u8868                   | \`{label,value}[]\`            | -      |\r
| defaultVisible  | \u8F93\u5165\u6846\u9ED8\u8BA4\u662F\u5426\u663E\u793A\uFF0C\u53EA\u6709\u7B2C\u4E00\u6B21\u751F\u6548 | \`boolean\`                    | -      |\r
| visible         | \u8F93\u5165\u6846\u662F\u5426\u663E\u793A                     | \`boolean\`                    | -      |\r
| onVisibleChange | \u8F93\u5165\u6846\u663E\u793A\u9690\u85CF\u7684\u56DE\u8C03\u51FD\u6570           | \`(visible: boolean) => void\` | -      |\r
\r
## NoticeIcon \u901A\u77E5\u5DE5\u5177\r
\r
\u901A\u77E5\u5DE5\u5177\u63D0\u4F9B\u4E00\u4E2A\u5C55\u793A\u591A\u79CD\u901A\u77E5\u4FE1\u606F\u7684\u754C\u9762\u3002\r
\r
\`\`\`tsx\r
/**\r
 * background: '#f0f2f5'\r
 */\r
import { message } from 'antd';\r
import React from 'react';\r
import NoticeIcon from '@/components/NoticeIcon/NoticeIcon';\r
\r
export default () => {\r
  const list = [\r
    {\r
      id: '000000001',\r
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',\r
      title: '\u4F60\u6536\u5230\u4E86 14 \u4EFD\u65B0\u5468\u62A5',\r
      datetime: '2017-08-09',\r
      type: 'notification',\r
    },\r
    {\r
      id: '000000002',\r
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',\r
      title: '\u4F60\u63A8\u8350\u7684 \u66F2\u59AE\u59AE \u5DF2\u901A\u8FC7\u7B2C\u4E09\u8F6E\u9762\u8BD5',\r
      datetime: '2017-08-08',\r
      type: 'notification',\r
    },\r
  ];\r
  return (\r
    <NoticeIcon\r
      count={10}\r
      onItemClick={(item) => {\r
        message.info(\`\${item.title} \u88AB\u70B9\u51FB\u4E86\`);\r
      }}\r
      onClear={(title: string, key: string) => message.info('\u70B9\u51FB\u4E86\u6E05\u7A7A\u66F4\u591A')}\r
      loading={false}\r
      clearText="\u6E05\u7A7A"\r
      viewMoreText="\u67E5\u770B\u66F4\u591A"\r
      onViewMore={() => message.info('\u70B9\u51FB\u4E86\u67E5\u770B\u66F4\u591A')}\r
      clearClose\r
    >\r
      <NoticeIcon.Tab\r
        tabKey="notification"\r
        count={2}\r
        list={list}\r
        title="\u901A\u77E5"\r
        emptyText="\u4F60\u5DF2\u67E5\u770B\u6240\u6709\u901A\u77E5"\r
        showViewMore\r
      />\r
      <NoticeIcon.Tab\r
        tabKey="message"\r
        count={2}\r
        list={list}\r
        title="\u6D88\u606F"\r
        emptyText="\u60A8\u5DF2\u8BFB\u5B8C\u6240\u6709\u6D88\u606F"\r
        showViewMore\r
      />\r
      <NoticeIcon.Tab\r
        tabKey="event"\r
        title="\u5F85\u529E"\r
        emptyText="\u4F60\u5DF2\u5B8C\u6210\u6240\u6709\u5F85\u529E"\r
        count={2}\r
        list={list}\r
        showViewMore\r
      />\r
    </NoticeIcon>\r
  );\r
};\r
\`\`\`\r
\r
### NoticeIcon API\r
\r
| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C |\r
| --- | --- | --- | --- |\r
| count | \u6709\u591A\u5C11\u672A\u8BFB\u901A\u77E5 | \`number\` | - |\r
| bell | \u94C3\u94DB\u7684\u56FE\u8868 | \`ReactNode\` | - |\r
| onClear | \u70B9\u51FB\u6E05\u7A7A\u6570\u636E\u6309\u94AE | \`(tabName: string, tabKey: string) => void\` | - |\r
| onItemClick | \u672A\u8BFB\u6D88\u606F\u5217\u88AB\u70B9\u51FB | \`(item: API.NoticeIconData, tabProps: NoticeIconTabProps) => void\` | - |\r
| onViewMore | \u67E5\u770B\u66F4\u591A\u7684\u6309\u94AE\u70B9\u51FB | \`(tabProps: NoticeIconTabProps, e: MouseEvent) => void\` | - |\r
| onTabChange | \u901A\u77E5 Tab \u7684\u5207\u6362 | \`(tabTile: string) => void;\` | - |\r
| popupVisible | \u901A\u77E5\u663E\u793A\u662F\u5426\u5C55\u793A | \`boolean\` | - |\r
| onPopupVisibleChange | \u901A\u77E5\u4FE1\u606F\u663E\u793A\u9690\u85CF\u7684\u56DE\u8C03\u51FD\u6570 | \`(visible: boolean) => void\` | - |\r
| clearText | \u6E05\u7A7A\u6309\u94AE\u7684\u6587\u5B57 | \`string\` | - |\r
| viewMoreText | \u67E5\u770B\u66F4\u591A\u7684\u6309\u94AE\u6587\u5B57 | \`string\` | - |\r
| clearClose | \u5C55\u793A\u6E05\u7A7A\u6309\u94AE | \`boolean\` | - |\r
| emptyImage | \u5217\u8868\u4E3A\u7A7A\u65F6\u7684\u515C\u5E95\u5C55\u793A | \`ReactNode\` | - |\r
\r
### NoticeIcon.Tab API\r
\r
| \u53C2\u6570         | \u8BF4\u660E               | \u7C7B\u578B                                 | \u9ED8\u8BA4\u503C |\r
| ------------ | ------------------ | ------------------------------------ | ------ |\r
| count        | \u6709\u591A\u5C11\u672A\u8BFB\u901A\u77E5     | \`number\`                             | -      |\r
| title        | \u901A\u77E5 Tab \u7684\u6807\u9898    | \`ReactNode\`                          | -      |\r
| showClear    | \u5C55\u793A\u6E05\u9664\u6309\u94AE       | \`boolean\`                            | \`true\` |\r
| showViewMore | \u5C55\u793A\u52A0\u8F7D\u66F4         | \`boolean\`                            | \`true\` |\r
| tabKey       | Tab \u7684\u552F\u4E00 key     | \`string\`                             | -      |\r
| onClick      | \u5B50\u9879\u7684\u5355\u51FB\u4E8B\u4EF6     | \`(item: API.NoticeIconData) => void\` | -      |\r
| onClear      | \u6E05\u695A\u6309\u94AE\u7684\u70B9\u51FB     | \`()=>void\`                           | -      |\r
| emptyText    | \u4E3A\u7A7A\u7684\u65F6\u5019\u6D4B\u8BD5     | \`()=>void\`                           | -      |\r
| viewMoreText | \u67E5\u770B\u66F4\u591A\u7684\u6309\u94AE\u6587\u5B57 | \`string\`                             | -      |\r
| onViewMore   | \u67E5\u770B\u66F4\u591A\u7684\u6309\u94AE\u70B9\u51FB | \`( e: MouseEvent) => void\`           | -      |\r
| list         | \u901A\u77E5\u4FE1\u606F\u7684\u5217\u8868     | \`API.NoticeIconData\`                 | -      |\r
\r
### NoticeIconData\r
\r
\`\`\`tsx | pure\r
export interface NoticeIconData {\r
  id: string;\r
  key: string;\r
  avatar: string;\r
  title: string;\r
  datetime: string;\r
  type: string;\r
  read?: boolean;\r
  description: string;\r
  clickClose?: boolean;\r
  extra: any;\r
  status: string;\r
}\r
\`\`\`\r
\r
## RightContent\r
\r
RightContent \u662F\u4EE5\u4E0A\u51E0\u4E2A\u7EC4\u4EF6\u7684\u7EC4\u5408\uFF0C\u540C\u65F6\u65B0\u589E\u4E86 plugins \u7684 \`SelectLang\` \u63D2\u4EF6\u3002\r
\r
\`\`\`tsx | pure\r
<Space>\r
  <HeaderSearch\r
    placeholder="\u7AD9\u5185\u641C\u7D22"\r
    defaultValue="umi ui"\r
    options={[\r
      { label: <a href="https://umijs.org/zh/guide/umi-ui.html">umi ui</a>, value: 'umi ui' },\r
      {\r
        label: <a href="next.ant.design">Ant Design</a>,\r
        value: 'Ant Design',\r
      },\r
      {\r
        label: <a href="https://protable.ant.design/">Pro Table</a>,\r
        value: 'Pro Table',\r
      },\r
      {\r
        label: <a href="https://prolayout.ant.design/">Pro Layout</a>,\r
        value: 'Pro Layout',\r
      },\r
    ]}\r
  />\r
  <Tooltip title="\u4F7F\u7528\u6587\u6863">\r
    <span\r
      className={styles.action}\r
      onClick={() => {\r
        window.location.href = 'https://pro.ant.design/docs/getting-started';\r
      }}\r
    >\r
      <QuestionCircleOutlined />\r
    </span>\r
  </Tooltip>\r
  <Avatar />\r
  {REACT_APP_ENV && (\r
    <span>\r
      <Tag color={ENVTagColor[REACT_APP_ENV]}>{REACT_APP_ENV}</Tag>\r
    </span>\r
  )}\r
  <SelectLang className={styles.action} />\r
</Space>\r
\`\`\`\r
`}}]);
