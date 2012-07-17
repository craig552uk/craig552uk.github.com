require 'net/http'
require 'xmlsimple'
require 'json'

def get_val(item)
  (item) ? item[0] : ''
end

url  = 'http://ratings.food.gov.uk/OpenDataFiles/FHRS878en-GB.xml'

if ARGV[0]
  xml_data = XmlSimple.xml_in(ARGV[0])
else
  xml_data = XmlSimple.xml_in(Net::HTTP.get_response(URI.parse(url)).body)
end

json = {}

xml_data['EstablishmentCollection'][0]['EstablishmentDetail'].each do |item|

  type = get_val item['BusinessType']
  json[type] = [] unless json[type]

  row = {}
  row['id']           = get_val item['FHRSID']
  row['name']         = get_val item['BusinessName']
  row['type']         = get_val item['BusinessType']
  row['type_id']      = get_val item['BusinessTypeID']
  row['address1']     = get_val item['AddressLine1']
  row['address2']     = get_val item['AddressLine2']
  row['address3']     = get_val item['AddressLine3']
  row['postcode']     = get_val item['PostCode']
  row['rating']       = get_val item['RatingValue']
  row['rating_date']  = get_val item['RatingDate']
  row['lng']          = get_val item['Geocode'][0]['Longitude']
  row['lat']          = get_val item['Geocode'][0]['Latitude']

  json[type] << row
end

puts json.to_json
