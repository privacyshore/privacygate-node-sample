// https://commerce.coinbase.com/docs/api/#webhooks
// https://www.npmjs.com/package/coinbase-commerce-node
// Coinbase Commerce need public Webhook for development. See README.md

import coinbase from 'coinbase-commerce-node'
import db from './db'

const Client = coinbase.Client.init(global.config.coinbase)
const Charge = coinbase.resources.Charge

export const checkout = async ({ total, count }) => {
	const chargeObj = new Charge({
		'name': 'Monthly subscription',
		'description': `Payment for services for ${count} months`,
		'local_price': {
			'amount': total,
			'currency': 'USD'
		},
		'pricing_type': 'fixed_price'
	})

	const payment = await chargeObj.save().then(res => ({ id: res.id, url: res.hosted_url }))
	return await db.insert(payment).then(res => res.url)

}

export const successPayment = async (id) => await db.updateOne({ id }, { status: 'success' })
export const updatePayment = async (id) => await db.updateOne({ id }, { status: 'pending' })
export const deletePayment = async (id) => await db.deleteOne({ id })