'use strict'

class InfoController {
  get (req, res, next) {
    res.status(200).json({"supported_asset_types": ["item"]})
  }
}

module.exports = new InfoController()
