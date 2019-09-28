---
category: API文档
type: 基础接口
order: 0
title: 统一下单
---

## 接口说明
- 当商户后台、网络、服务器等出现异常，商户系统最终未接收到支付通知；
- 调用支付接口后，返回系统错误或未知交易状态情况；
- 调用付款码支付`API`，返回`USERPAYING`的状态；
- 调用关单或撤销接口`API`之前，需确认支付状态；

## 接口地址

```http request
https://api.mch.weixin.qq.com/pay/unifiedorder
```

## API 参数

| 参数 | 必填	| 类型 |	长度限制	| 描述 |
| --- | --- | --- | --- | --- |
|appId	|yes	| string |128	|应用ID|
|appKey|yes	| string |32	|接口`appKey`，应用的唯一标识|
|timeStamp	|yes	| long |20	|`1970-01-01`开始的时间戳，秒为单位|
|sign	|yes	| string |32	|`MD5`签名，详见 [签名规则](/docs/react/sign-rule)|
|channel	|no	| string |255	|渠道标识符（仅针对游戏类别应用）|


## 请求示例
```http request

https://api.mch.weixin.qq.com?appKey=Fii6DgbvqWnEm2HYXupl5oaw&sign=b451fb67aa4996d2c08b3567ba3591d3

```

## 响应示例
```json
{
	"code": 0,
	"message":"",
	"data": {
		"order_sn": "123456789"
	}
}
```

