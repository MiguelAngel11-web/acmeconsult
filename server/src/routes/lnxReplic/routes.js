const express = require("express");
const emp = require("../../models/emp");
const pay = require("../../models/pay");
const proj = require("../../models/proj");
const asg = require("../../models/asg");
const { lnxConectionReplicate } = require("../../database");
const axios = require("axios");

const { body, param, validationResult } = require("express-validator");

var router = express.Router();

/* Empleados */

router.get("/emp", [], (req, res) => {
  emp.getAll(lnxConectionReplicate, (data) => {
    res.json(data);
  });
});
router.get("/emp1", [], (req, res) => {
  emp.viewEmp1(lnxConectionReplicate, (data) => {
    res.json(data);
  });
});
router.get("/emp2", [], (req, res) => {
  emp.viewEmp2(lnxConectionReplicate, (data) => {
    res.json(data);
  });
});
router.get("/emp3", [], (req, res) => {
  emp.viewEmp3(lnxConectionReplicate, (data) => {
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
    emp.getId(lnxConectionReplicate, ename, (data) => {
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
    emp.create(lnxConectionReplicate, body, (data) => {
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
    emp.delete(lnxConectionReplicate, body, (data) => {
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
    emp.update(lnxConectionReplicate, body, (data) => {
      res.json(data);
    });
  }
);

/* Pay */
router.get("/pay", [], (req, res) => {
  pay.getAll(lnxConectionReplicate, (data) => {
    res.json(data);
  });
});
/* VIiews, fragmentacion horz */
router.get("/pay1", [], (req, res) => {
  pay.viewPay1(lnxConectionReplicate, (data) => {
    res.json(data);
  });
});
router.get("/pay2", [], (req, res) => {
  pay.viewPay2(lnxConectionReplicate, (data) => {
    res.json(data);
  });
});
router.get("/pay3", [], (req, res) => {
  pay.viewPay3(lnxConectionReplicate, (data) => {
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
    pay.create(lnxConectionReplicate, body, (data) => {
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
    pay.delete(lnxConectionReplicate, body, (data) => {
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
    pay.update(lnxConectionReplicate, body, (data) => {
      res.json(data);
    });
  }
);

/* End pay */
/* Proj */
router.get("/proj", [], (req, res) => {
  proj.getAll(lnxConectionReplicate, (data) => {
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
    proj.getId(lnxConectionReplicate, pname, (data) => {
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
    /* payno,title,salary */
    if (!errors.isEmpty()) {
      console.log(errors);
      res.json({ success: false, err: JSON.stringify(errors) });
      return;
    }
    let body = req.body;
    proj.create(lnxConectionReplicate, body, (data) => {
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
    proj.delete(lnxConectionReplicate, body, (data) => {
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
    proj.update(lnxConectionReplicate, body, (data) => {
      res.json(data);
    });
  }
);
/* Asg */
router.get("/asg", [], (req, res) => {
  asg.getAll(lnxConectionReplicate, (data) => {
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
    let body = req.body;
    let res_emp = await axios
      .post(`http://localhost:5000/lnx/emp/getname`, { ename: body.ename })
      .then((data) => data.data);
    let res_proj = await axios
      .post(`http://localhost:5000/lnx/proj/getname`, { pname: body.pname })
      .then((data) => data.data);
    if (res_emp && res_proj) {
      body.ename = res_emp.eno;
      body.pname = res_proj.pno;
     
      asg.create(lnxConectionReplicate, body, (data) => {
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
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.json({ success: false, err: JSON.stringify(errors) });
      return;
    }

    let body = req.body;
    let res_emp = await axios
      .post(`http://localhost:5000/lnx/emp/getname`, { ename: body.ename })
      .then((data) => data.data);
    let res_proj = await axios
      .post(`http://localhost:5000/lnx/proj/getname`, { pname: body.pname })
      .then((data) => data.data);
    if (res_emp && res_proj) {
      body.ename = res_emp.eno;
      body.pname = res_proj.pno;
      asg.delete(lnxConectionReplicate, body, (data) => {
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
      .post(`http://localhost:5000/lnx/emp/getname`, { ename: body.ename })
      .then((data) => data.data);
    let res_proj = await axios
      .post(`http://localhost:5000/lnx/proj/getname`, { pname: body.pname })
      .then((data) => data.data);
    if (res_emp && res_proj) {
      body.ename = res_emp.eno;
      body.pname = res_proj.pno;
      asg.update(lnxConectionReplicate, body, (data) => {
        res.json(data);
      });
    } else {
      res.status(400).send("No se encontro un empleado o proyecto");
    }
  }
);

module.exports = router;
