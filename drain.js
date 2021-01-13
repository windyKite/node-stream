// drain 事件监听写入流的拥堵情况, 不拥堵情况下调用回调
stream1.on('data', (chunk) => {
  const flag = stream2.write(chunk)
  if(flag === false) {
    // dont write
  }
  stream2.on('drain', () => {
    // go on write
  })
})

stream1.on('end', () => {
  stream2.end()
})