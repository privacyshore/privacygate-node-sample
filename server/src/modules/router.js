import Router from '@koa/router'

const router = new Router()

import { checkout, successPayment, updatePayment, deletePayment } from './privacygate'

router.get('/', async (ctx, next) => {
	ctx.body = 'Endpoint ready'
})

// get payment url
router.get('/checkout', async (ctx, next) => {
	let params = ctx.query || {}

	if (params && params.total && params.count) {
		return ctx.body = await checkout(params)
	}

	ctx.body = 'PrivacyGate checkout endpoint'
})

// webhook endpoint
router.post('/privacygate-webhook', async (ctx, next) => {
	const request = ctx.request.body

	if (request && request.event && request.event.data && request.event.data.id) {
		const id = request.event.data.id
		const event = request.event.type

		if (event == 'charge:confirmed') return successPayment(id)
		if (event == 'charge:pending') return updatePayment(id)
		else if (event == 'charge:failed' || event == 'charge:delayed' || event == 'charge:resolved') return deletePayment(id)
	}

	ctx.body = 'PrivacyGate Webhook endpoint'
})

export default router
