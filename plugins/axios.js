export default function({ $axios, redirect }) {
    $axios.onRequest((config) => {
        console.log('Making request to ' + config.url)
    })

    $axios.onError((error) => {
        const code = parseInt(error.response && error.response.status)
        const statusText = error.response && error.response.statusText
        if (code === 400) {
            redirect('/400')
        }
        if (statusText === 'Unauthorized' || code === 401) {
            redirect('/login')
        }
    });

    $axios.setHeader('Content-Type', 'application/json')

    $axios.setHeader('cache-control', 'no-cache')
}