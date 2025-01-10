# Using Test Doubles for API Responses - Server

Let's say we are building the "Locations" API from the browser section.

If you recall, our Angular application was making an HTTP Post call to a `locations` resource that looked something like this:

:::code-group

```json [json example]
{
  "name": "Taco Bell",
  "phone": "555-1212",
  "note": "Good food",
  "address": {
    "street": "119 Mockingird Court",
    "city": "Cleveland",
    "state": "OH",
    "zip": "44319"
  }
}
```
:::

Our API decides to *verify* the address, using a commercial API. We'll assume for this demonstration they are using [Smarty](https://www.smarty.com/docs/cloud/us-street-api).

This is a commercial API, and requires a license, and incurs a charge per request.

To verify the sample address above, you would send something like:

:::code-group
```http [http request]
GET https://us-street.api.smarty.com/street-address?
	auth-id=YOUR+AUTH-ID+HERE&
	auth-token=YOUR+AUTH-TOKEN+HERE&
	license=YOUR+LICENSE+HERE&
	street=119+Mockingird+Court&
	city=Cleveland&
	state=OH&
    zipcode=44319'
```
:::

The verified address (happy path) would be a 200 status code with something like the following:

:::code-group
```json [Fake Response From Docs]
[
	{
		"input_index": 0,
		"candidate_index": 0,
		"delivery_line_1": "119 Mockingbird Ct.",
		"last_line": "Cleveland, OH 44319-2020",
		"delivery_point_barcode": "997059901010",
		"smarty_key": "1144020281",
		"components": {
			"primary_number": "119",
			"street_name": "Mockingbird",
			"street_suffix": "Ct.",
			"city_name": "North Pole",
			"state_abbreviation": "AK",
			"zipcode": "99705",
			"plus4_code": "9901",
			"delivery_point": "01",
			"delivery_point_check_digit": "0"
		},
		"metadata": {
			
		},
		"analysis": {
			
		}
	}
]
```
:::

And if the Address isn't found:

:::code-group
```json [No Address Example]
[]
```
:::

## Stubbing This with WireMock

:::code-group
```json [mocks\mappings\address.jons]
{
    "request": {
        "urlPath": "/street-address",
        "method": "GET"
    },
    "response": {
        "status":  200,
        "transformers": ["response-template"],
        "bodyFileName": "address.json",
        "fixedDelayMilliseconds": 0

    }
}
```

```handlebars [mocks\__files\address.json]
[
	{
		"delivery_line_1": "{{request.query.street}}",
		"components": {
			"city_name": "{{request.query.city}}",
			"state_abbreviation": "{{request.query.state}}",
			"zipcode": "{{request.query.zip}}",
			"plus4_code": "9999"
		}
	}
]
```
:::

> [!NOTE] Notice We Are Only Sending The Data We Need
> I am *not* returning all the data that the API *can* return, only the specific data I need to 
> create my response. 

## Using the Mock From a .NET API

We will now use our Locations API Project and configure it to use WireMock.

