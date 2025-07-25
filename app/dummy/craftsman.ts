import {
  CraftsmanApprovalStatus,
  CraftsmanStatus,
  type Craftsman,
} from "~/types/common";

export const craftsmen: Craftsman[] = [
  {
    id: 1,
    name: "Anar Məmmədov",
    image: "https://picsum.photos/150",
    profession: "Santexnik",
    rating: 4.5,
    createdAt: "2025-01-01T12:00:00Z",
    status: CraftsmanStatus.ACTIVE,
    orders: 124,
    phone: "+994 50 123 45 67",
    email: "anar.mammadov@example.com",
    serviceAreas: [],
    documents: [],
    applicationDate: "2025-01-01T12:00:00Z",
    approvalStatus: CraftsmanApprovalStatus.APPROVED,
    approvalDate: "2025-01-01T12:00:00Z",
    trialPeriod: "2025-01-01T12:00:00Z",
    rejectionReason: null,
    rejectionDate: null,
  },
  {
    id: 2,
    name: "Elchin Aliyev",
    image: "https://picsum.photos/150",
    profession: "Electricity",
    rating: 4.9,
    createdAt: "2025-01-01T12:00:00Z",
    status: CraftsmanStatus.ACTIVE,
    orders: 98,
    phone: "+994 51 234 56 78",
    email: "elchin.aliyev@example.com",
    serviceAreas: [],
    documents: [],
    applicationDate: "2025-01-01T12:00:00Z",
    approvalStatus: CraftsmanApprovalStatus.APPROVED,
    approvalDate: "2025-01-01T12:00:00Z",
    trialPeriod: "2025-01-01T12:00:00Z",
    rejectionReason: null,
    rejectionDate: null,
  },
  {
    id: 3,
    name: "Farid Huseynov",
    image: "https://picsum.photos/150",
    profession: "Carpenter",
    rating: 4.7,
    createdAt: "2025-01-01T12:00:00Z",
    status: CraftsmanStatus.INACTIVE,
    orders: 56,
    phone: "+994 55 345 67 89",
    email: "farid.huseynov@example.com",
    serviceAreas: [],
    documents: [],
    applicationDate: "2025-01-01T12:00:00Z",
    approvalStatus: CraftsmanApprovalStatus.APPROVED,
    approvalDate: "2025-01-01T12:00:00Z",
    trialPeriod: "2025-01-01T12:00:00Z",
    rejectionReason: null,
    rejectionDate: null,
  },
  {
    id: 4,
    name: "Leyla Ismayilova",
    image: "https://picsum.photos/150",
    profession: "Painter",
    rating: 4.5,
    createdAt: "2025-01-01T12:00:00Z",
    status: CraftsmanStatus.WAITING,
    orders: 42,
    phone: "+994 70 456 78 90",
    email: "leyla.ismayilova@example.com",
    serviceAreas: [],
    documents: [],
    applicationDate: "2025-01-01T12:00:00Z",
    approvalStatus: CraftsmanApprovalStatus.APPROVED,
    approvalDate: "2025-01-01T12:00:00Z",
    trialPeriod: "2025-01-01T12:00:00Z",
    rejectionReason: null,
    rejectionDate: null,
  },
  {
    id: 5,
    name: "Rashad Guliyev",
    image: "https://picsum.photos/150",
    profession: "Cleaner",
    rating: 4.6,
    createdAt: "2025-01-01T12:00:00Z",
    status: CraftsmanStatus.WAITING,
    orders: 0,
    phone: "+994 77 567 89 01",
    email: "rashad.guliyev@example.com",
    serviceAreas: [],
    documents: [],
    applicationDate: "2025-01-01T12:00:00Z",
    approvalStatus: CraftsmanApprovalStatus.APPROVED,
    approvalDate: "2025-01-01T12:00:00Z",
    trialPeriod: "2025-01-01T12:00:00Z",
    rejectionReason: null,
    rejectionDate: null,
  },
  {
    id: 6,
    name: "Nigar Hasanova",
    image: "https://picsum.photos/150",
    profession: "Interior Designer",
    rating: 4.9,
    createdAt: "2025-01-01T12:00:00Z",
    status: CraftsmanStatus.ACTIVE,
    orders: 37,
    phone: "+994 50 678 90 12",
    email: "nigar.hasanova@example.com",
    serviceAreas: [],
    documents: [],
    applicationDate: "2025-01-01T12:00:00Z",
    approvalStatus: CraftsmanApprovalStatus.APPROVED,
    approvalDate: "2025-01-01T12:00:00Z",
    trialPeriod: "2025-01-01T12:00:00Z",
    rejectionReason: null,
    rejectionDate: null,
  },
  {
    id: 7,
    name: "Tural Mammadli",
    image: "https://picsum.photos/150",
    profession: "IKVS Technician",
    rating: 4.7,
    createdAt: "2025-01-01T12:00:00Z",
    status: CraftsmanStatus.INACTIVE,
    orders: 65,
    phone: "+994 51 789 01 23",
    email: "tural.mammadli@example.com",
    serviceAreas: [],
    documents: [],
    applicationDate: "2025-01-01T12:00:00Z",
    approvalStatus: CraftsmanApprovalStatus.APPROVED,
    approvalDate: "2025-01-01T12:00:00Z",
    trialPeriod: "2025-01-01T12:00:00Z",
    rejectionReason: null,
    rejectionDate: null,
  },
  {
    id: 8,
    name: "Sabina Alizadeh",
    image: "https://picsum.photos/150",
    profession: "Gardener",
    rating: 4.4,
    createdAt: "2025-01-01T12:00:00Z",
    status: CraftsmanStatus.INACTIVE,
    orders: 28,
    phone: "+994 55 890 12 34",
    email: "sabina.alizadeh@example.com",
    serviceAreas: [],
    documents: [],
    applicationDate: "2025-01-01T12:00:00Z",
    approvalStatus: CraftsmanApprovalStatus.APPROVED,
    approvalDate: "2025-01-01T12:00:00Z",
    trialPeriod: "2025-01-01T12:00:00Z",
    rejectionReason: null,
    rejectionDate: null,
  },
];

export const craftsmenWaitingApproval: Craftsman[] = [
  {
    id: 1,
    name: "Vüqar Əliyev",
    image: "https://picsum.photos/150",
    profession: "Elektrik",
    rating: 4.5,
    createdAt: "2025-01-01T12:00:00Z",
    status: CraftsmanStatus.WAITING,
    orders: 124,
    phone: "+994 70 901 23 45",
    email: "vuqar.aliyev@example.com",
    serviceAreas: ["Nəsimi", "Nərimanov"],
    documents: ["Şəxsiyyət vəsiqəsi", "Elektrik sertifikatı"],
    applicationDate: "2025-04-01T12:00:00Z",
    approvalStatus: CraftsmanApprovalStatus.PENDING,
    approvalDate: null,
    trialPeriod: "2025-01-01T12:00:00Z",
    rejectionReason: null,
    rejectionDate: null,
  },
  {
    id: 2,
    name: "Rəşad Məmmədov",
    image: "https://picsum.photos/150",
    profession: "Santexnik",
    rating: 4.5,
    createdAt: "2025-01-01T12:00:00Z",
    status: CraftsmanStatus.WAITING,
    orders: 124,
    phone: "+994 55 234 56 78",
    email: "rasad.mammadov@example.com",
    serviceAreas: ["Yasamal", "Binəqədi"],
    documents: [
      "Şəxsiyyət vəsiqəsi",
      "Elektrik sertifikatı",
      "İş təcrübəsi sənədi",
    ],
    applicationDate: "2025-04-01T12:00:00Z",
    approvalStatus: CraftsmanApprovalStatus.APPROVED,
    approvalDate: null,
    trialPeriod: "2025-01-01T12:00:00Z",
    rejectionReason: null,
    rejectionDate: null,
  },
  {
    id: 3,
    name: "Lalə Hüseynova",
    image: "https://picsum.photos/150",
    profession: "Dizayner",
    rating: 4.5,
    createdAt: "2025-01-01T12:00:00Z",
    status: CraftsmanStatus.WAITING,
    orders: 124,
    phone: "+994 55 234 56 78",
    email: "lale.huseynova@example.com",
    serviceAreas: ["Səbail", "Nəsimi"],
    documents: ["Şəxsiyyət vəsiqəsi", "Dizayn diplomu"],
    applicationDate: "2025-03-31T12:00:00Z",
    approvalStatus: CraftsmanApprovalStatus.REJECTED,
    approvalDate: null,
    trialPeriod: "2025-01-01T12:00:00Z",
    rejectionReason: null,
    rejectionDate: null,
  },
];

export const craftsmenApproved: Craftsman[] = [
  {
    id: 4,
    name: "Anar Əliyev",
    image: "https://picsum.photos/150",
    profession: "Dülgər",
    rating: 4.8,
    createdAt: "2025-02-15T09:30:00Z",
    status: CraftsmanStatus.ACTIVE,
    orders: 89,
    phone: "+994 50 555 44 33",
    email: "anar.aliyev@example.com",
    serviceAreas: ["Xətai", "Nizami"],
    documents: ["Şəxsiyyət vəsiqəsi", "Peşə sertifikatı"],
    applicationDate: "2025-03-15T14:20:00Z",
    approvalStatus: CraftsmanApprovalStatus.APPROVED,
    approvalDate: "2025-03-16T10:00:00Z",
    trialPeriod: "2025-01-01T12:00:00Z",
    rejectionReason: null,
    rejectionDate: null,
  },
  {
    id: 5,
    name: "Səbinə Məmmədli",
    image: "https://picsum.photos/150",
    profession: "Bərbər",
    rating: 4.9,
    createdAt: "2025-01-20T11:45:00Z",
    status: CraftsmanStatus.ACTIVE,
    orders: 156,
    phone: "+994 77 899 12 34",
    email: "sabina.mammadli@example.com",
    serviceAreas: ["28 May", "Gənclik"],
    documents: ["Şəxsiyyət vəsiqəsi", "Bərbər lisenziyası"],
    applicationDate: "2025-03-10T09:15:00Z",
    approvalStatus: CraftsmanApprovalStatus.APPROVED,
    approvalDate: "2025-03-11T16:30:00Z",
    trialPeriod: "2025-01-01T12:00:00Z",
    rejectionReason: null,
    rejectionDate: null,
  },
  {
    id: 6,
    name: "Kamran Həsənov",
    image: "https://picsum.photos/150",
    profession: "Elektrik",
    rating: 4.7,
    createdAt: "2025-03-01T10:00:00Z",
    status: CraftsmanStatus.ACTIVE,
    orders: 67,
    phone: "+994 51 444 55 66",
    email: "kamran.hasanov@example.com",
    serviceAreas: ["Yasamal", "Nərimanov", "Nəsimi"],
    documents: [
      "Şəxsiyyət vəsiqəsi",
      "Elektrik sertifikatı",
      "Təhlükəsizlik sertifikatı",
    ],
    applicationDate: "2025-03-20T13:45:00Z",
    approvalStatus: CraftsmanApprovalStatus.APPROVED,
    approvalDate: "2025-03-21T11:20:00Z",
    trialPeriod: "2025-01-01T12:00:00Z",
    rejectionReason: null,
    rejectionDate: null,
  },
];

export const craftsmenRejected: Craftsman[] = [
  {
    id: 7,
    name: "Tural Mammadli",
    image: "https://picsum.photos/150",
    profession: "IKVS Technician",
    rating: 4.7,
    createdAt: "2025-01-01T12:00:00Z",
    status: CraftsmanStatus.INACTIVE,
    orders: 65,
    phone: "+994 51 789 01 23",
    email: "tural.mammadli@example.com",
    serviceAreas: ["Xətai", "Nizami"],
    documents: [],
    applicationDate: "2025-01-01T12:00:00Z",
    approvalStatus: CraftsmanApprovalStatus.REJECTED,
    approvalDate: null,
    trialPeriod: "2025-01-01T12:00:00Z",
    rejectionReason: "Sertifikat etibarsızdır",
    rejectionDate: "2025-01-01T12:00:00Z",
  },
  {
    id: 8,
    name: "Sabina Alizadeh",
    image: "https://picsum.photos/150",
    profession: "Gardener",
    rating: 4.4,
    createdAt: "2025-01-01T12:00:00Z",
    status: CraftsmanStatus.INACTIVE,
    orders: 28,
    phone: "+994 55 890 12 34",
    email: "sabina.alizadeh@example.com",
    serviceAreas: ["Xətai", "Nizami"],
    documents: [],
    applicationDate: "2025-01-01T12:00:00Z",
    approvalStatus: CraftsmanApprovalStatus.REJECTED,
    approvalDate: null,
    trialPeriod: "2025-01-01T12:00:00Z",
    rejectionReason: "Natamam sənədlər",
    rejectionDate: "2025-01-01T12:00:00Z",
  },
];
