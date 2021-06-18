const express = require("express");
const emp = require("../../models/emp");
const pay = require("../../models/pay");
const proj = require("../../models/proj");
const asg = require("../../models/asg");
const {  winConection } = require("../../database");

const { body, param, validationResult } = require("express-validator");


var router = express.Router();

/* Empleados */

router.get("/emp", [], (req, res) => {
  emp.getAll(winConection, (data) => {
    res.json(data);
  });
});

router.post(
  "/emp/getname",
  [body("ename").not().isEmpty().isString()],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.json({ success: false, err: JSON.stringify(errors) });
      return;
    }
    let ename = req.body.ename;
    emp.getId(winConection, ename, (data) => {
      res.json(data.id);
    });
  }
);
router.post(
  "/emp",
  [
    body("ename").not().isEmpty().isString(),
    body("title").not().isEmpty().isString(),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors);
      res.json({ success: false, err: JSON.stringify(errors) });
      return;
    }
    let body = req.body;
    emp.create(winConection, body, (data) => {
      console.log(data);
      res.json(data);
    });
  }
);


router.post(
  "/emp/delete",
  [body("ename").not().isEmpty().isString()],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.json({ success: false, err: JSON.stringify(errors) });
      return;
    }
    let body = req.body;
    emp.delete(winConection, body, (data) => {
      res.json(data);
    });
  }
);

router.post(
  "/emp/update",
  [
    body("ename").not().isEmpty().isString(),
    body("eno").not().isEmpty().isString(),
    body("title").not().isEmpty().isString(),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors);
      res.json({ success: false, err: JSON.stringify(errors) });
      return;
    }
    let body = req.body;
    emp.update(winConection, body, (data) => {
      res.json(data);
    });
  }
);

/* Pay */
router.get("/pay", [], (req, res) => {
  pay.getAll(winConection, (data) => {
    res.json(data);
  });
});

router.post(
  "/pay",
  [
    body("title").not().isEmpty().isString(),
    body("salary").not().isEmpty().isString(),
  ],
  (req, res) => {
    const errors = validationResult(req);
    /* payno,title,salary */
    if (!errors.isEmpty()) {
      console.log(errors);
      res.json({ success: false, err: JSON.stringify(errors) });
      return;
    }
    let body = req.body;
    pay.create(winConection, body, (data) => {
      console.log(data);
      res.json(data);
    });
  }
);

router.post(
  "/pay/delete",
  [body("title").not().isEmpty().isString()],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.json({ success: false, err: JSON.stringify(errors) });
      return;
    }
    let body = req.body;
    pay.delete(winConection, body, (data) => {
      res.json(data);
    });
  }
);

router.post(
  "/pay/update",
  [
    body("payno").not().isEmpty().isString(),
    body("salary").not().isEmpty().isString(),
    body("title").not().isEmpty().isString(),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors);
      res.json({ success: false, err: JSON.stringify(errors) });
      return;
    }
    let body = req.body;
    pay.update(winConection, body, (data) => {
      res.json(data);
    });
  }
);


/* End pay */
/* Proj */
router.get("/proj", [], (req, res) => {
  proj.getAll(winConection, (data) => {
    res.json(data);
  });
});
router.get("/proj1", [], (req, res) => {
  proj.viewProj1(winConection, (data) => {
    res.json(data);
  });
});
router.get("/proj2", [], (req, res) => {
  proj.viewProj2(winConection, (data) => {
    res.json(data);
  });
});
router.get("/proj3", [], (req, res) => {
  proj.viewProj3(winConection, (data) => {
    res.json(data);
  });
});
router.post(
  "/proj/getname",
  [body("pname").not().isEmpty().isString()],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.json({ success: false, err: JSON.stringify(errors) });
      return;
    }
    let pname = req.body.pname;
    proj.getId(winConection, pname, (data) => {
      res.json(data.id);
    });
  }
);
router.post(
  "/proj",
  [
    body("pname").not().isEmpty().isString(),
    body("budget").not().isEmpty().isString(),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors);
      res.json({ success: false, err: JSON.stringify(errors) });
      return;
    }
    let body = req.body;
    proj.create(winConection, body, (data) => {
      console.log(data);
      res.json(data);
    });
  }
);

router.post(
  "/proj/delete",
  [body("pname").not().isEmpty().isString()],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.json({ success: false, err: JSON.stringify(errors) });
      return;
    }
    let body = req.body;
    proj.delete(winConection, body, (data) => {
      res.json(data);
    });
  }
);

router.post(
  "/proj/update",
  [
    body("pno").not().isEmpty().isString(),
    body("budget").not().isEmpty().isString(),
    body("pname").not().isEmpty().isString(),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors);
      res.json({ success: false, err: JSON.stringify(errors) });
      return;
    }
    let body = req.body;
    proj.update(winConection, body, (data) => {
      res.json(data);
    });
  }
);
/* Asg */
router.get("/asg", [], (req, res) => {
  asg.getAll(winConection, (data) => {
    res.json(data);
  });
});
router.get("/asg1", [], (req, res) => {
  asg.viewAsg2(winConection, (data) => {
    res.json(data);
  });
});
router.get("/asg2", [], (req, res) => {
  asg.viewAsg2(winConection, (data) => {
    res.json(data);
  });
});
router.get("/asg3", [], (req, res) => {
  asg.viewAsg3(winConection, (data) => {
    res.json(data);
  });
});

router.post(
  "/asg",
  [
    body("ename").not().isEmpty().isString(),
    body("pname").not().isEmpty().isString(),
    body("resp").not().isEmpty().isString(),
    body("dur").not().isEmpty().isNumeric(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    /* payno,title,salary */
    if (!errors.isEmpty()) {
      console.log(errors);
      res.json({ success: false, err: JSON.stringify(errors) });
      return;
    }
    let res_emp = await axios
    .post(`http://localhost:5000/win/emp/getname`, { ename: body.ename })
    .then((data) => data.data);
  let res_proj = await axios
    .post(`http://localhost:5000/win/proj/getname`, { pname: body.pname })
    .then((data) => data.data);
  if (res_emp && res_proj) {
    body.ename = res_emp.eno;
    body.pname = res_proj.pno;
   
    asg.create(winConection, body, (data) => {
      console.log(data);
      res.json(data);
    });
  } else {
    res.status(400).send("No se encontro un empleado o proyecto");
  }
  }
);

router.post(
  "/asg/delete",
  [
    body("ename").not().isEmpty().isString(),
    body("pname").not().isEmpty().isString(),
],
  async(req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.json({ success: false, err: JSON.stringify(errors) });
      return;
    }
    let body = req.body;
    let res_emp = await axios
      .post(`http://localhost:5000/win/emp/getname`, { ename: body.ename })
      .then((data) => data.data);
    let res_proj = await axios
      .post(`http://localhost:5000/win/proj/getname`, { pname: body.pname })
      .then((data) => data.data);
    if (res_emp && res_proj) {
      body.ename = res_emp.eno;
      body.pname = res_proj.pno;
      asg.delete(linuxConection, body, (data) => {
        res.json(data);
      });
    } else {
      res.status(400).send("No se encontro un empleado o proyecto");
    }
  }
);

router.post(
  "/asg/update",
  [
    body("pname").not().isEmpty().isString(),
    body("resp").not().isEmpty().isString(),
    body("dur").not().isEmpty().isString(),
    body("ename").not().isEmpty().isString(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors);
      res.json({ success: false, err: JSON.stringify(errors) });
      return;
    }
    let body = req.body;
    let res_emp = await axios
      .post(`http://localhost:5000/win/emp/getname`, { ename: body.ename })
      .then((data) => data.data);
    let res_proj = await axios
      .post(`http://localhost:5000/win/proj/getname`, { pname: body.pname })
      .then((data) => data.data);
    if (res_emp && res_proj) {
      body.ename = res_emp.eno;
      body.pname = res_proj.pno;
      asg.update(winConection, body, (data) => {
        res.json(data);
      });
    } else {
      res.status(400).send("No se encontro un empleado o proyecto");
    }
  }
);

module.exports = router;
