// Single source of truth for all site content.
// Sources: Jacky's EN resume (2026) + VTC Electrical Engineering coursework (75901F).

export const profile = {
  name: 'Ying Ho Chow',
  nickname: 'Jacky',
  title: 'Automation Engineer · Robotics',
  location: 'Karlsruhe, Germany',
  email: 'jackychow.yh@gmail.com',
  github: 'https://github.com/jacky-benkyo',
  resume: '/Jacky-Chow-Resume-EN.pdf',
  photo: '/images/jacky.jpg',
  tagline:
    'I make machines move reliably — from PLC logic on the shop floor to ROS 2 motion planning in simulation.',
  summary: [
    'Automation engineer with 5+ years of hands-on experience in system development, integration and on-site commissioning across Hong Kong, Germany, the USA and Austria.',
    'My path runs from electrical engineering and Allen-Bradley ladder logic, through robot software QA and a medical-robot master’s thesis, to programming Yaskawa robot cells for machine tending. Today I’m focused on modern robotics: ROS 2, MoveIt 2, simulation and embedded micro-ROS — bringing the reliability mindset of industrial automation to intelligent, next-generation robot systems.',
  ],
};

export const stats = [
  { value: '5+', label: 'years in automation & integration' },
  { value: '−19%', label: 'robot cell transport time' },
  { value: '+27%', label: 'UR robot test coverage' },
  { value: '4', label: 'countries commissioned in' },
];

export const capabilities = [
  {
    id: 'R',
    title: 'Robotics',
    blurb: 'Motion planning, simulation and robot programming.',
    items: ['ROS 2 (Humble)', 'MoveIt 2', 'Gazebo', 'RViz', 'micro-ROS', 'Yaskawa MotoSim EG-VRC', 'Universal Robots'],
  },
  {
    id: 'A',
    title: 'Industrial Automation',
    blurb: 'PLC programming, HMI and commissioning.',
    items: ['Siemens TIA Portal (SCL, LAD)', 'Beckhoff TwinCAT 3 / ADS', 'Allen-Bradley ControlLogix', 'PLC-ANALYZER Pro4', 'FAT / SAT', 'HMI design'],
  },
  {
    id: 'E',
    title: 'Embedded & Connectivity',
    blurb: 'Microcontrollers, sensors and robot-to-cloud links.',
    items: ['STM32', 'Raspberry Pi Pico W', 'MQTT / AMQP', 'Mosquitto, RabbitMQ', '4G · LTE Cat 1 · Wi-Fi 6', '8051 / BASIC Stamp'],
  },
  {
    id: 'S',
    title: 'Software & Quality',
    blurb: 'Clean code, tests and reproducible builds.',
    items: ['C++', 'Python', 'C', 'colcon / CMake', 'Docker', 'Linux', 'Git / GitHub', 'TDD', 'ISTQB CTFL', 'Jira'],
  },
];

export type Job = {
  company: string;
  role: string;
  place: string;
  period: string;
  tags: string[];
  points: string[];
};

export const experience: Job[] = [
  {
    company: 'SCHMID Group · Gebr. SCHMID GmbH',
    role: 'PLC Programmer – Industrial Robotics',
    place: 'Freudenstadt, Germany',
    period: 'Jun 2024 – Jun 2026',
    tags: ['Yaskawa', 'TIA Portal', 'SCL', 'Commissioning'],
    points: [
      'Programmed Yaskawa robots for machine loading and unloading using SCL in Siemens TIA Portal.',
      'Optimised motion sequences of a linear axis unit with a rotary axis, cutting transport time by ~19%.',
      'Independently commissioned systems on-site for international clients in the USA and Austria.',
    ],
  },
  {
    company: 'Superior Autonomation Ltd',
    role: 'Embedded Systems Software Developer (STM32)',
    place: 'Hong Kong & Shenzhen, China',
    period: 'Mar 2023 – Jul 2023',
    tags: ['STM32', 'Wi-Fi 6', 'Integration'],
    points: [
      'Analysed requirements from the Hong Kong Productivity Council (HKPC) and proposed connectivity solutions.',
      'Tested Wi-Fi 6 modules and carried out on-site integration testing.',
    ],
  },
  {
    company: 'Reactive Robotics GmbH',
    role: 'Master’s Thesis & Software Development Intern',
    place: 'Munich, Germany',
    period: 'May 2022 – Jan 2023',
    tags: ['Medical robotics', 'TwinCAT 3', 'MQTT', 'Python'],
    points: [
      'Thesis: “Conception and Development of a Connectivity Solution for Medical Robot”.',
      'Evaluated over-the-air transmission (4G / Wi-Fi 5 / LTE Cat 1) via MQTT & AMQP with Mosquitto and RabbitMQ.',
      'Built a Python GUI for remote-control features over the TwinCAT ADS protocol.',
      'Applied TDD under Linux; implemented and tested robot control software on Beckhoff PLCs.',
    ],
  },
  {
    company: 'Wandelbots GmbH',
    role: 'Working Student – Quality Assurance',
    place: 'Dresden, Germany',
    period: 'Sep 2020 – Feb 2022',
    tags: ['Universal Robots', 'Test automation', 'ISO 10218-1'],
    points: [
      'Increased test coverage for Universal Robots (UR series) by ~27%.',
      'Created automated test cases to raise GUI coverage and satisfy ISO 10218-1 requirement coverage.',
    ],
  },
  {
    company: 'Nam Wah Intelligent Automation Ltd',
    role: 'Automation Systems Project Engineer',
    place: 'Hong Kong',
    period: 'Aug 2014 – Aug 2018',
    tags: ['Allen-Bradley', 'Ladder', 'HMI', 'FAT'],
    points: [
      'Delivered automation projects across the full lifecycle, focused on HMI design and ladder logic for Allen-Bradley ControlLogix PLCs.',
      'Authored test scripts and ran beta testing for Factory Acceptance Tests and fire-safety inspections.',
    ],
  },
];

export type Project = {
  title: string;
  year: string;
  kind: string;
  summary: string;
  stack: string[];
  image?: string;
  highlight?: string;
  wide?: boolean;
  repo?: string;
};

export const projects: Project[] = [
  {
    title: 'UR5e Trajectory Control in ROS 2',
    year: '2026',
    kind: 'Simulation & Control',
    summary:
      'Developed and simulated trajectory control for a UR5e arm, including motion planning and collision checking, fully containerised for reproducible builds.',
    stack: ['ROS 2 Humble', 'MoveIt 2', 'RViz', 'Docker', 'C++ / Python'],
    highlight: 'Motion planning + collision checking',
    repo: 'https://github.com/jacky-benkyo/moveit2_ursim',
  },
  {
    title: 'Low-latency IMU Telemetry with micro-ROS',
    year: '2026',
    kind: 'Embedded Hardware',
    summary:
      'Streamed GY-801 IMU data from a Raspberry Pi Pico W into the ROS 2 graph using micro-ROS — a small, real sensor-to-robot pipeline.',
    stack: ['micro-ROS', 'Pi Pico W', 'GY-801 IMU', 'C'],
    highlight: 'Sensor → ROS 2 in real time',
    repo: 'https://github.com/jacky-benkyo/micro_ros_tests_applications',
  },
  {
    title: 'Connectivity Solution for a Medical Robot',
    year: '2022',
    kind: 'Master’s Thesis · Reactive Robotics',
    summary:
      'Designed and evaluated the remote-connectivity stack for a medical robot: benchmarked 4G, Wi-Fi 5 and LTE Cat 1 links over MQTT and AMQP, and built a Python remote-control GUI talking to Beckhoff PLCs via ADS.',
    stack: ['TwinCAT 3', 'ADS', 'MQTT', 'AMQP', 'Python', 'TDD'],
    highlight: 'Grade 1.6 M.Eng.',
  },
  {
    title: 'Yaskawa Machine-Tending Cell Optimisation',
    year: '2024–26',
    kind: 'Industrial Robotics · SCHMID',
    summary:
      'Re-sequenced the motion of a linear axis with a rotary axis feeding Yaskawa robots for machine loading/unloading, then commissioned the cells on-site in the USA and Austria.',
    stack: ['Yaskawa', 'TIA Portal', 'SCL', 'MotoSim EG-VRC'],
    highlight: '~19% faster transport',
  },
  {
    title: 'Wireless Vehicle with Robotic Arm',
    year: '2015',
    kind: 'EE Diploma Project · VTC',
    summary:
      'Team project: a Bluetooth-controlled vehicle with a 2-servo gripper arm, driven from an Android phone. Solved the RS-232 vs TTL serial mismatch between the Bluetooth module and the BASIC Stamp 2, and compared DC, stepper and servo drives to pick the right actuators.',
    stack: ['BASIC Stamp 2', 'PBASIC', 'Bluetooth', 'MG995 servos', 'DC motors'],
    image: '/images/bs2-vehicle.jpg',
    highlight: 'First robot build',
  },
  {
    title: 'Emergency Generator Sets for Kai Tak Cruise Terminal',
    year: '2016',
    kind: 'Power Systems Design · VTC',
    summary:
      'Sized fire-services generator sets for a major cruise terminal: tabulated running and staged starting kVA for firemen’s lifts, drencher and sprinkler pumps and smoke extraction, then selected a 1400 kVA set and planned plant rooms and fuel supply.',
    stack: ['Load analysis', 'FSD requirements', 'Alternator sizing', 'Electrical installation'],
    highlight: '1400 kVA FS gen-set',
    wide: true,
  },
];

export const foundations = [
  { title: 'Control Systems Engineering', detail: 'Feedback, stability and transient response (Nise) — the maths behind every servo loop.' },
  { title: 'Microcontrollers (8051)', detail: 'Assembly, timers & interrupts, analogue interfacing, ADC/DAC and motor control.' },
  { title: 'Electronics & Power Electronics', detail: 'Converters, drives and power supplies for actuators.' },
  { title: 'Power Quality', detail: 'Harmonic estimation and mitigation in industrial networks.' },
  { title: 'Electrical Installation & Lightning Protection', detail: 'Circuit theory, installation design, LPS risk management.' },
  { title: 'Industrial Networking & Safety', detail: 'Converged plant-wide Ethernet, occupational safety & health, ISO 10218-1.' },
];

export const education = [
  {
    school: '42 Heilbronn',
    degree: 'Project-based Computer Science curriculum',
    period: 'Oct 2026 – present',
    place: 'Heilbronn, Germany',
    note: 'Admitted after the 4-week “Piscine”. Focus: C/C++, Python, algorithms, data structures, debugging — peer-reviewed.',
  },
  {
    school: 'TH Köln – University of Applied Sciences',
    degree: 'M.Eng. Automation & Information Technology',
    period: 'Oct 2018 – Jan 2023',
    place: 'Gummersbach, Germany',
    note: 'Industrial Automation and IT · Grade 1.6 · Thesis at Reactive Robotics GmbH.',
  },
  {
    school: 'Vocational Training Council (VTC)',
    degree: 'Diploma in Electrical Engineering (part-time)',
    period: 'Sep 2014 – Aug 2017',
    place: 'Hong Kong',
    note: 'Studied alongside full-time automation work at Nam Wah.',
  },
  {
    school: 'Hong Kong Baptist University',
    degree: 'BBA (Hons.) – Information Systems Management',
    period: 'Sep 2009 – Nov 2011',
    place: 'Hong Kong',
    note: 'Second Class Upper (2.1).',
  },
];

export const certifications = [
  { name: 'ROS2 Basics in 5 Days (Python)', issuer: 'The Construct', date: 'Apr 2026' },
  { name: 'German Training Online B2', issuer: 'Goethe-Institut', date: 'Apr 2026' },
  { name: 'JLPT A2', issuer: 'The Japan Foundation', date: 'Jan 2026' },
  { name: 'telc Deutsch B1', issuer: 'did deutsch-institut', date: 'Jun 2024' },
  { name: 'Certified Tester Foundation Level', issuer: 'ISTQB', date: 'Jun 2021' },
];

export const languages = [
  { name: 'Cantonese', level: 'Native', pct: 100 },
  { name: 'English', level: 'Fluent', pct: 90 },
  { name: 'Mandarin', level: 'Fluent', pct: 90 },
  { name: 'German', level: 'B2', pct: 65 },
  { name: 'Japanese', level: 'A2', pct: 30 },
];
