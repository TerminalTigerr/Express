// Callback
function doSomethingAsync(Callback) {
  setTimeout(() => {
    console.log('Task Completed')
    Callback()
  }, 10000)
}

function onTaskComplete() {
  console.log("Callback executed")
}

doSomethingAsync(onTaskComplete)

// Promises
const myPromise = new Promise((resolve, reject) => {
  const success = true
  if(success) {
    resolve("Operation was successful")
  }
  else {
    reject("Operation failed")
  }
})

