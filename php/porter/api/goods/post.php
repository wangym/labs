<?php

// post.php

require(dirname(dirname(__DIR__)) . '/include/bootstrap.php');

/* 验证参数 */
$params = get_api_params();

/* 执行逻辑 */
$goodsService = new GoodsService();
$result = $goodsService->postText($params);
unset($goodsService);

/* 响应结果 */
render_json(response_json($result->status, 'file-post.php', $result->data->toArray()));

