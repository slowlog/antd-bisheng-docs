---
category: API文档
order: 0
title: 签名规则
---

#### 所有的请求将进行 md5 签名，确保传输的安全可靠

## 签名原理
`md5` 签名的原理如下： 将所有的参数值按参数名升序进行排列在拼接`appSecret`。

```php
$sign = md5(value1 + value2 + ...valueN... + appSecret)
```

## 注意事项

- #### 签名验证时，必须遍历`request`请求中的所有参数，进行签名验证。 

-  #### 开发者在验证请求时，务必对所有参数进行遍历，全部加入签名验证数据中。

- #### 如果开发者写死签名验证参数，未来升级参数将导致开发者服务不可用，请谨慎。


## PHP 代码示例
```php
/**
 * 签名
 * @param array $params 参数数组
 * @param string $secret 密钥
 * @return string
 */
function getSign($params, $secret)
{
    ksort($params);
    $s = '';
    foreach ($params as $k => $v) {
        $s .= $v;
    }
    $s .= $secret;
    return md5($s);
}
```