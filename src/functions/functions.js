import axios from 'axios'
import JSSoup from 'jssoup'

export default {
	 /**
     * Acceptable values for sale:
     * sale-mens
     * sale-womens
     * whale-of-a-sale
     *
     * Acceptable Size's:
     * X, XS, XXS, S, M, L, XL, XXL, 2XL, 3XL, 4XL, null
     */
	getProducts: async (sale='', sizes=[])  => {
		let URL = ''

		if (sizes.length === 0) {
			URL = `https://www.vineyardvines.com/${sale}`
		} else {
			URL = `https://www.vineyardvines.com/${sale}/?prefn1=size&prefv1=`
			
			for (let i = 0; i < sizes.length; i++) {
				let size = sizes[i]

				if (i === 0) {
					URL = URL.concat(size.toUpperCase())
					continue;
				} else {
					URL = URL.concat(`%7C${size.toUpperCase()}`)
				}
			}
		}

		console.log(URL)

		try {
			const { data } = await axios(URL, {
				method: 'GET'
			})

			const $ = new JSSoup(data).findAll('div', 'productimage')
			const products = []

			for (let i = 0; i < $.length; i++) {
				let parent = $[i]
				let product = null

				let name = parent.find('h2', 'name').text
				let price = parent.find('p', 'productprice').text
				let color = parent.find('span', 'a11y-only').text
				let image = parent.attrs['data-alternate']
				let link = parent.find('a').attrs['href']

				if (price.includes('Was')) {
					let sale = price.split('W')[0]
					let original = price.split('W')[1].replace('as', '')

					sale = parseFloat(sale.replace('$', ''))
					original = parseFloat(original.replace('$', ''))

					let savings = Math.round(original - sale, 2)

					product = {
						"title": name,
						"sale_price": sale,
						"original_price": original,
						"savings": savings,
						"color": color,
						'image': image,
						'link': link
					}
				} else {
					product = {
						"title": name,
						"price": price,
						"color": color,
						'image': image,
						'link': link
					}
				}

				products.push(product)
			}

			return products
		} catch(error) {
			throw error
		}
	}
}
