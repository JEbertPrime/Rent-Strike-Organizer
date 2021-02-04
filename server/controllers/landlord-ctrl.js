const Landlord = require('../models/landlord-model');
const validateLandlordSearch = require('../validation/landlordSearch');
const validateLandlordAdd = require('../validation/addLandlord');
const validateMongoId = require('../validation/mongoId');

const createLandlord = (req, res) => {
  const { body } = req;
  const { errors, isValid } = validateLandlordAdd(body);

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a landlord',
    });
  }
  if (isValid) {
    const landlord = new Landlord(body);

    landlord
      .save()
      .then(() =>
        res.status(201).json({
          success: true,
          id: landlord._id,
          message: 'Landlord created!',
        }),
      )
      .catch(error =>
        res.status(400).json({
          error,
          message: 'Landlord not created!',
        }),
      );
  } else {
    res.status(400).json({
      success: false,
      error: errors,
    });
  }
};

const updateLandlord = async (req, res) => {
  const { body } = req;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a body to update',
    });
  }

  Landlord.findOne({ _id: req.params.id }, (err, landlord) => {
    if (err) {
      return res.status(404).json({
        err,
        message: 'Landlord not found!',
      });
    }
    landlord.name = body.name;
    landlord.location = body.location;
    landlord.numTenants = body.numTenants;
    landlord.comments = body.comments;
    landlord
      .save()
      .then(() =>
        res.status(200).json({
          success: true,
          id: landlord._id,
          message: 'Landlord updated!',
        }),
      )
      .catch(error =>
        res.status(404).json({
          error,
          message: 'Landlord not updated!',
        }),
      );
  });
};

const deleteLandlord = async (req, res) => {
  await Landlord.findOneAndDelete({ _id: req.params.id }, (err, landlord) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!landlord) {
      return res
        .status(404)
        .json({ success: false, error: `Landlord not found` });
    }

    return res.status(200).json({ success: true, data: landlord });
  }).catch(err => console.log(err));
};

const getLandlordById = async (req, res) => {
  const { errors, isValid } = validateMongoId(req.params);
  if (isValid) {
    await Landlord.findOne({ _id: req.params.id }, (err, landlord) => {
      if (err) {
        return res.status(400).json({ success: false, error: err });
      }

      if (!landlord) {
        return res
          .status(404)
          .json({ success: false, error: `Landlord not found` });
      }
      return res.status(200).json({ success: true, data: landlord });
    }).catch(err => console.log(err));
  } else {
    return res.status(400).json({ success: false, error: errors });
  }
};
const addLandlordComment = async (req, res) => {
  const { body } = req;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a body to update',
    });
  }

  Landlord.update(
    { _id: req.params.id },
    { $push: { comments: req.body.comment } },
    (err, result) => {
      if (err) {
        return res.status(404).json({
          err,
          message: 'Landlord not found!',
        });
      }
      return res.status(200).json({ success: true, data: result });
    },
  );
};
const getLandlordCommentsById = async (req, res) => {
  const { errors, isValid } = validateMongoId(req.params);
  if (isValid) {
    await Landlord.find({ _id: req.params.id })
      .select({
        comments: {
          $slice: [parseInt(req.query.start, 10), parseInt(req.query.end, 10)],
        },
        name: 0,
        location: 0,
        createdAt: 0,
        updatedAt: 0,
        numTenants: 0,
        __v: 0,
        _id: 0,
      })
      .exec((err, landlord) => {
        if (err) {
          return res.status(400).json({ success: false, error: err });
        }

        if (!landlord) {
          return res
            .status(404)
            .json({ success: false, error: `Comments not found` });
        }
        return res.status(200).json({ success: true, data: landlord });
      });
  } else {
    return res.status(400).json({ success: false, error: errors });
  }
};
const getLandlordsByName = async (req, res) => {
  const { errors, isValid } = validateLandlordSearch(req.params);
  if (isValid) {
    await Landlord.find(
      { name: new RegExp(`\\b${req.params.name}`, 'i') },
      'name numTenants location _id',
      (err, landlords) => {
        if (err) {
          return res.status(400).json({ success: false, error: err });
        }

        if (!landlords.length) {
          return res
            .status(404)
            .json({ success: false, error: `${req.params.name} not found!` });
        }
        return res.status(200).json({ success: true, data: landlords });
      },
    ).catch(err => console.log(err));
  } else {
    return res.status(400).json({ success: false, error: errors });
  }
};
const getLandlords = async (req, res) => {
  await Landlord.find({}, (err, landlords) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!landlords.length) {
      return res
        .status(404)
        .json({ success: false, error: `Landlord not found` });
    }
    return res.status(200).json({ success: true, data: landlords });
  }).catch(err => console.log(err));
};

module.exports = {
  createLandlord,
  updateLandlord,
  deleteLandlord,
  getLandlords,
  getLandlordById,
  getLandlordsByName,
  getLandlordCommentsById,
  addLandlordComment,
};
