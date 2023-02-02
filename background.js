const checkButton = (button) => button && button.getAttribute('title') === 'Toggle limited content width' && button.getAttribute('data-event-name') === 'limited-width-toggle-off'

// Check if button exists on initial load, click if so
const button = document.querySelector('[title="Toggle limited content width"]')
if (checkButton(button)) {
    button.click()
} else {
    // If button injected after load, set observer to identify it and click it
    window.addEventListener ("load", function()
    {
       let mutationObserver = new MutationObserver(
          mutations => mutations.forEach(observer => {
            for (const node of [...observer.addedNodes]) {
                // console.log('added node:', node)
                if (checkButton(node)) {
                    node.click()
                }
            }
          })
       )
       mutationObserver.observe(document.body,{childList:true})
    })
}
