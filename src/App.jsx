import React, { useState, useEffect } from "react";
import {
  Container,
  Navbar,
  Nav,
  Button,
  Form,
  Card,
  Row,
  Col,
  Modal,
  Spinner,
  Alert,
  Badge,
  Table,
  Image,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles.css";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import {
  FaUserCircle,
  FaCog,
  FaHome,
  FaSignOutAlt,
  FaLanguage,
  FaPlusCircle,
  FaUsers,
  FaSearch,
  FaFilter,
  FaMoneyBillWave,
  FaCalendarAlt,
  FaUserFriends,
  FaInfoCircle,
  FaTrash,
  FaEdit,
  FaCamera,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation, initReactI18next } from "react-i18next";
import i18n from "i18next";

// Configure i18n
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        welcomeTitle: "Welcome to Hos7 Ma3 Sahbak",
        welcomeDesc: "Digital savings groups, smart, easy & secure.",
        startBtn: "Start",
        registerTitle: "Register Your Account",
        name: "Full Name",
        nationalId: "National ID",
        phoneNumber: "Phone Number",
        sendOtp: "Send OTP",
        enterOtp: "Enter OTP",
        verifyOtp: "Verify",
        otpSent: "OTP code sent!",
        paymentMethod: "Choose Payment Method",
        wallet: "E-Wallet",
        bankAccount: "Bank Account",
        meezaCard: "Meeza Card",
        submit: "Submit",
        associations: "Associations",
        filterBy: "Filter by",
        membersCount: "Members Count",
        installmentValue: "Installment Value",
        durationMonths: "Duration (months)",
        createNewAssoc: "Create New Association",
        inviteParticipants:
          "Invite Participants (phone numbers, comma separated)",
        monthlyStatus: "Monthly Installment Status",
        settings: "Settings",
        profile: "Profile",
        language: "Language",
        arabic: "Arabic",
        english: "English",
        logout: "Logout",
        loading: "Loading...",
        error: "Error",
        success: "Success",
        paid: "Paid",
        unpaid: "Unpaid",
        createAssocSuccess: "Association created successfully!",
        noUser: "No user logged in",
        currentAssociations: "Current Associations",
        paymentStats: "Payment Statistics",
        edit: "Edit",
        save: "Save",
        cancel: "Cancel",
        notifications: "Notifications",
        paymentNotifications: "Receive payment notifications",
        turnNotifications: "Notifications for your turn",
        appUpdates: "App offers and updates",
        welcome: "Welcome",
        notAvailable: "Not available",
        notSpecified: "Not specified",
        ongoing: "Ongoing",
        completed: "Completed",
        association: "Association",
        nextPayment: "Next Payment",
        amount: "Amount",
        status: "Status",
        clearFilters: "Clear Filters",
        noAssociations: "No associations found",
        associationName: "Association Name",
        allFieldsRequired: "All fields are required",
        invalidPhone: "Invalid phone number",
        otpLength: "OTP must be 6 digits",
        invalidOtp: "Invalid OTP code",
        selectPaymentMethod: "Please select a payment method",
        associationNameRequired: "Association name is required",
        minMembers: "Minimum 2 members required",
        invalidInstallment: "Invalid installment value",
        invalidDuration: "Invalid duration",
        invalidParticipants: "Invalid participants list",
        currentLanguage: "Current Language",
        changeTo: "Change to",
        participatingAssociations: "Participating Associations",
        totalPayments: "Total Payments",
        completedAssociations: "Completed Associations",
        upcoming: "Upcoming",
        delete: "Delete",
        confirmDelete: "Are you sure you want to delete this association?",
        yes: "Yes",
        no: "No",
        creator: "Creator",
        join: "Join",
        leave: "Leave",
        uploadPhoto: "Upload Photo",
        changePhoto: "Change Photo",
        myAssociations: "My Associations",
        allAssociations: "All Associations",
        joinRequests: "Join Requests",
        manage: "Manage",
        viewDetails: "View Details",
        makePayment: "Make Payment",
        paymentHistory: "Payment History",
        associationDetails: "Association Details",
        memberSince: "Member Since",
        totalCollected: "Total Collected",
        remainingPayments: "Remaining Payments",
        yourTurn: "Your Turn",
        nextTurn: "Next Turn",
        associationRules: "Association Rules",
        noRules: "No rules specified",
        addRule: "Add Rule",
        rule: "Rule",
        add: "Add",
        remove: "Remove",
        chat: "Chat",
        sendMessage: "Send Message",
        typeMessage: "Type your message here...",
        noMessages: "No messages yet",
        today: "Today",
        yesterday: "Yesterday",
        viewAll: "View All",
        markAsPaid: "Mark as Paid",
        receipt: "Receipt",
        downloadReceipt: "Download Receipt",
        transactionId: "Transaction ID",
        paymentDate: "Payment Date",
        paymentAmount: "Payment Amount",
        paymentMethod: "Payment Method",
        paymentStatus: "Payment Status",
        pending: "Pending",
        verified: "Verified",
        rejected: "Rejected",
        verificationRequired: "Verification Required",
        uploadProof: "Upload Proof of Payment",
        selectFile: "Select File",
        noFileSelected: "No file selected",
        submitProof: "Submit Proof",
        verificationPending: "Verification Pending",
        verificationNote:
          "Your payment proof is under verification by the association admin",
        fontSize: "Font Size",
        darkMode: "Dark Mode",
        lightMode: "Light Mode",
        theme: "Theme",
        associationType: "Association Type",
        regular: "Regular",
        rotating: "Rotating",
        bidding: "Bidding",
        selectType: "Select Type",
        associationFrequency: "Payment Frequency",
        weekly: "Weekly",
        monthly: "Monthly",
        biweekly: "Bi-weekly",
        startDate: "Start Date",
        selectDate: "Select Date",
        associationDescription: "Description",
        enterDescription: "Enter association description",
        associationPrivacy: "Privacy",
        public: "Public",
        private: "Private",
        byInvitation: "By Invitation Only",
        associationVisibility: "Visibility",
        visibleToMembers: "Visible to Members Only",
        visibleToPublic: "Visible to Public",
        associationCurrency: "Currency",
        EGP: "Egyptian Pound (EGP)",
        USD: "US Dollar (USD)",
        EUR: "Euro (EUR)",
        SAR: "Saudi Riyal (SAR)",
        associationAdmin: "Association Admin",
        makeAdmin: "Make Admin",
        removeAdmin: "Remove Admin",
        removeMember: "Remove Member",
        approveRequest: "Approve Request",
        rejectRequest: "Reject Request",
        requests: "Requests",
        noRequests: "No pending requests",
        invite: "Invite",
        inviteLink: "Invite Link",
        copyLink: "Copy Link",
        linkCopied: "Link copied to clipboard!",
        associationActivity: "Recent Activity",
        noActivity: "No recent activity",
        activity: {
          created: "created the association",
          joined: "joined the association",
          left: "left the association",
          paid: "made a payment of",
          turn: "received their turn payment of",
          ruleAdded: "added a rule:",
          ruleRemoved: "removed a rule",
          adminAdded: "was made an admin",
          adminRemoved: "was removed as admin",
          memberRemoved: "was removed from the association",
          requestApproved: "approved a join request from",
          requestRejected: "rejected a join request from",
        },
      },
    },
    ar: {
      translation: {
        welcomeTitle: "مرحبًا بك في حوش مع صحابك",
        welcomeDesc: "الجمعيات الرقمية، ذكية، سهلة وآمنة.",
        startBtn: "ابدأ",
        registerTitle: "سجل حسابك",
        name: "الاسم بالكامل",
        nationalId: "الرقم القومي",
        phoneNumber: "رقم الموبايل",
        sendOtp: "إرسال رمز التحقق",
        enterOtp: "أدخل رمز التحقق",
        verifyOtp: "تحقق",
        otpSent: "تم إرسال رمز التحقق!",
        paymentMethod: "اختر وسيلة الدفع",
        wallet: "المحفظة الإلكترونية",
        bankAccount: "الحساب البنكي",
        meezaCard: "كارت ميزة",
        submit: "إرسال",
        associations: "الجمعيات",
        filterBy: "تصفية حسب",
        membersCount: "عدد الأعضاء",
        installmentValue: "قيمة القسط",
        durationMonths: "مدة الجمعية (شهور)",
        createNewAssoc: "إنشاء جمعية جديدة",
        inviteParticipants: "دعوة المشاركين (أرقام هواتف مفصولة بفواصل)",
        monthlyStatus: "حالة الأقساط الشهرية",
        settings: "الإعدادات",
        profile: "الملف الشخصي",
        language: "اللغة",
        arabic: "العربية",
        english: "الإنجليزية",
        logout: "تسجيل خروج",
        loading: "جاري التحميل...",
        error: "خطأ",
        success: "نجاح",
        paid: "مدفوع",
        unpaid: "غير مدفوع",
        createAssocSuccess: "تم إنشاء الجمعية بنجاح!",
        noUser: "لا يوجد مستخدم مسجل",
        currentAssociations: "الجمعيات الحالية",
        paymentStats: "إحصائيات الدفع",
        edit: "تعديل",
        save: "حفظ",
        cancel: "إلغاء",
        notifications: "إشعارات",
        paymentNotifications: "تلقي إشعارات الدفع",
        turnNotifications: "إشعارات دورك في الجمعية",
        appUpdates: "عروض وتحديثات التطبيق",
        welcome: "مرحبًا",
        notAvailable: "غير متاح",
        notSpecified: "غير محدد",
        ongoing: "جارية",
        completed: "منتهية",
        association: "الجمعية",
        nextPayment: "الدفعة القادمة",
        amount: "المبلغ",
        status: "الحالة",
        clearFilters: "مسح الفلاتر",
        noAssociations: "لا توجد جمعيات",
        associationName: "اسم الجمعية",
        allFieldsRequired: "جميع الحقول مطلوبة",
        invalidPhone: "رقم هاتف غير صحيح",
        otpLength: "رمز التحقق يجب أن يكون 6 أرقام",
        invalidOtp: "رمز تحقق غير صحيح",
        selectPaymentMethod: "الرجاء اختيار وسيلة دفع",
        associationNameRequired: "اسم الجمعية مطلوب",
        minMembers: "يجب أن يكون عدد الأعضاء 2 على الأقل",
        invalidInstallment: "قيمة قسط غير صالحة",
        invalidDuration: "مدة غير صالحة",
        invalidParticipants: "قائمة مشاركين غير صالحة",
        currentLanguage: "اللغة الحالية",
        changeTo: "تغيير إلى",
        participatingAssociations: "الجمعيات المشترك بها",
        totalPayments: "إجمالي المدفوعات",
        completedAssociations: "الجمعيات المنتهية",
        upcoming: "القادمة",
        delete: "حذف",
        confirmDelete: "هل أنت متأكد من حذف هذه الجمعية؟",
        yes: "نعم",
        no: "لا",
        creator: "المنشئ",
        join: "انضم",
        leave: "انسحب",
        uploadPhoto: "رفع صورة",
        changePhoto: "تغيير الصورة",
        myAssociations: "جمعياتي",
        allAssociations: "كل الجمعيات",
        joinRequests: "طلبات الانضمام",
        manage: "إدارة",
        viewDetails: "عرض التفاصيل",
        makePayment: "سداد دفعة",
        paymentHistory: "سجل الدفعات",
        associationDetails: "تفاصيل الجمعية",
        memberSince: "عضو منذ",
        totalCollected: "إجمالي المحصل",
        remainingPayments: "الدفعات المتبقية",
        yourTurn: "دورك",
        nextTurn: "الدور القادم",
        associationRules: "قواعد الجمعية",
        noRules: "لا توجد قواعد محددة",
        addRule: "إضافة قاعدة",
        rule: "القاعدة",
        add: "إضافة",
        remove: "إزالة",
        chat: "الدردشة",
        sendMessage: "إرسال رسالة",
        typeMessage: "اكتب رسالتك هنا...",
        noMessages: "لا توجد رسائل بعد",
        today: "اليوم",
        yesterday: "أمس",
        viewAll: "عرض الكل",
        markAsPaid: "تحديد كمُسدّد",
        receipt: "إيصال",
        downloadReceipt: "تحميل الإيصال",
        transactionId: "رقم المعاملة",
        paymentDate: "تاريخ الدفع",
        paymentAmount: "مبلغ الدفع",
        paymentMethod: "طريقة الدفع",
        paymentStatus: "حالة الدفع",
        pending: "قيد الانتظار",
        verified: "تم التحقق",
        rejected: "مرفوض",
        verificationRequired: "يتطلب التحقق",
        uploadProof: "رفع إثبات الدفع",
        selectFile: "اختر ملف",
        noFileSelected: "لم يتم اختيار ملف",
        submitProof: "إرسال الإثبات",
        verificationPending: "قيد التحقق",
        verificationNote:
          "إثبات الدفع الخاص بك قيد المراجعة من قبل مدير الجمعية",
        fontSize: "حجم الخط",
        darkMode: "الوضع المظلم",
        lightMode: "الوضع الفاتح",
        theme: "السمة",
        associationType: "نوع الجمعية",
        regular: "عادية",
        rotating: "دورانية",
        bidding: "مزايدة",
        selectType: "اختر النوع",
        associationFrequency: "تكرار الدفع",
        weekly: "أسبوعي",
        monthly: "شهري",
        biweekly: "نصف شهري",
        startDate: "تاريخ البدء",
        selectDate: "اختر تاريخ",
        associationDescription: "الوصف",
        enterDescription: "أدخل وصف الجمعية",
        associationPrivacy: "الخصوصية",
        public: "عامة",
        private: "خاصة",
        byInvitation: "بدعوة فقط",
        associationVisibility: "الرؤية",
        visibleToMembers: "مرئية للأعضاء فقط",
        visibleToPublic: "مرئية للعامة",
        associationCurrency: "العملة",
        EGP: "جنيه مصري (ج.م)",
        USD: "دولار أمريكي ($)",
        EUR: "يورو (€)",
        SAR: "ريال سعودي (ر.س)",
        associationAdmin: "مدير الجمعية",
        makeAdmin: "تعيين كمدير",
        removeAdmin: "إزالة كمدير",
        removeMember: "إزالة عضو",
        approveRequest: "قبول الطلب",
        rejectRequest: "رفض الطلب",
        requests: "الطلبات",
        noRequests: "لا توجد طلبات معلقة",
        invite: "دعوة",
        inviteLink: "رابط الدعوة",
        copyLink: "نسخ الرابط",
        linkCopied: "تم نسخ الرابط!",
        associationActivity: "النشاط الأخير",
        noActivity: "لا يوجد نشاط حديث",
        activity: {
          created: "أنشأ الجمعية",
          joined: "انضم إلى الجمعية",
          left: "غادر الجمعية",
          paid: "قام بسداد دفعة قدرها",
          turn: "حصل على دفعة دوره بقيمة",
          ruleAdded: "أضاف قاعدة:",
          ruleRemoved: "حذف قاعدة",
          adminAdded: "تم تعيينه كمدير",
          adminRemoved: "تمت إزالته كمدير",
          memberRemoved: "تمت إزالته من الجمعية",
          requestApproved: "وافق على طلب انضمام من",
          requestRejected: "رفض طلب انضمام من",
        },
      },
    },
  },
  lng: "ar",
  fallbackLng: "ar",
  interpolation: { escapeValue: false },
});

// Main App Component
export default function App() {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState("ar");
  const [user, setUser] = useState(null);
  const [page, setPage] = useState("welcome");
  const [darkMode, setDarkMode] = useState(false);
  const [associations, setAssociations] = useState([
    {
      id: 1,
      name: "جمعية عائلة أحمد",
      creator: "01000000001",
      membersCount: 5,
      installment: 1000,
      duration: 6,
      type: "rotating",
      frequency: "monthly",
      currency: "EGP",
      privacy: "private",
      description: "جمعية عائلية لشراء أجهزة منزلية",
      startDate: "2023-01-01",
      participants: [
        {
          phone: "01000000001",
          name: "أحمد محمد",
          order: 1,
          paidMonths: 6,
          isAdmin: true,
        },
        { phone: "01000000002", name: "محمد علي", order: 2, paidMonths: 6 },
        { phone: "01000000003", name: "علي محمود", order: 3, paidMonths: 5 },
        { phone: "01000000004", name: "محمود سعيد", order: 4, paidMonths: 4 },
        { phone: "01000000005", name: "سعيد خالد", order: 5, paidMonths: 3 },
      ],
      rules: [
        "الدفع خلال أول 5 أيام من الشهر",
        "في حالة التأخير غرامة 50 جنيها",
        "يتم الصرف في يوم 15 من كل شهر",
      ],
      activity: [
        {
          type: "created",
          user: "01000000001",
          date: "2023-01-01",
          amount: null,
        },
        {
          type: "joined",
          user: "01000000002",
          date: "2023-01-02",
          amount: null,
        },
        {
          type: "joined",
          user: "01000000003",
          date: "2023-01-03",
          amount: null,
        },
        {
          type: "joined",
          user: "01000000004",
          date: "2023-01-04",
          amount: null,
        },
        {
          type: "joined",
          user: "01000000005",
          date: "2023-01-05",
          amount: null,
        },
        { type: "paid", user: "01000000002", date: "2023-01-05", amount: 1000 },
        { type: "paid", user: "01000000003", date: "2023-01-05", amount: 1000 },
        { type: "paid", user: "01000000004", date: "2023-01-05", amount: 1000 },
        { type: "paid", user: "01000000005", date: "2023-01-05", amount: 1000 },
        { type: "turn", user: "01000000001", date: "2023-01-15", amount: 5000 },
      ],
      requests: [
        { phone: "01000000006", name: "خالد أحمد", date: "2023-02-01" },
      ],
    },
    {
      id: 2,
      name: "جمعية عمل الخير",
      creator: "01000000010",
      membersCount: 3,
      installment: 2000,
      duration: 4,
      type: "regular",
      frequency: "monthly",
      currency: "EGP",
      privacy: "public",
      description: "جمعية خيرية لدعم الأسر المحتاجة",
      startDate: "2023-02-01",
      participants: [
        {
          phone: "01000000010",
          name: "محمود عبد الله",
          order: 1,
          paidMonths: 4,
          isAdmin: true,
        },
        {
          phone: "01000000011",
          name: "عبد الله كمال",
          order: 2,
          paidMonths: 4,
        },
        { phone: "01000000012", name: "كمال رضا", order: 3, paidMonths: 4 },
      ],
      rules: [
        "الدفع خلال أول أسبوع من الشهر",
        "يتم توزيع المبلغ على الأسر المحتاجة",
      ],
      activity: [
        {
          type: "created",
          user: "01000000010",
          date: "2023-02-01",
          amount: null,
        },
        {
          type: "joined",
          user: "01000000011",
          date: "2023-02-02",
          amount: null,
        },
        {
          type: "joined",
          user: "01000000012",
          date: "2023-02-03",
          amount: null,
        },
        { type: "paid", user: "01000000011", date: "2023-02-05", amount: 2000 },
        { type: "paid", user: "01000000012", date: "2023-02-05", amount: 2000 },
      ],
      requests: [],
    },
    {
      id: 3,
      name: "جمعية السفر",
      creator: "01000000020",
      membersCount: 4,
      installment: 5000,
      duration: 5,
      type: "bidding",
      frequency: "monthly",
      currency: "EGP",
      privacy: "byInvitation",
      description: "جمعية لتوفير تكاليف السفر",
      startDate: "2023-03-01",
      participants: [
        {
          phone: "01000000020",
          name: "رضا سامي",
          order: 1,
          paidMonths: 3,
          isAdmin: true,
        },
        { phone: "01000000021", name: "سامي نادر", order: 2, paidMonths: 3 },
        { phone: "01000000022", name: "نادر وليد", order: 3, paidMonths: 2 },
        { phone: "01000000023", name: "وليد عمرو", order: 4, paidMonths: 2 },
      ],
      rules: [
        "الدفع خلال أول 10 أيام من الشهر",
        "يتم المزايدة على الدور في يوم 20 من الشهر",
        "أعلى مزايدة تحصل على الدور",
      ],
      activity: [
        {
          type: "created",
          user: "01000000020",
          date: "2023-03-01",
          amount: null,
        },
        {
          type: "joined",
          user: "01000000021",
          date: "2023-03-02",
          amount: null,
        },
        {
          type: "joined",
          user: "01000000022",
          date: "2023-03-03",
          amount: null,
        },
        {
          type: "joined",
          user: "01000000023",
          date: "2023-03-04",
          amount: null,
        },
        { type: "paid", user: "01000000021", date: "2023-03-05", amount: 5000 },
        { type: "paid", user: "01000000022", date: "2023-03-06", amount: 5000 },
        { type: "paid", user: "01000000023", date: "2023-03-07", amount: 5000 },
        {
          type: "turn",
          user: "01000000021",
          date: "2023-03-20",
          amount: 20000,
        },
      ],
      requests: [],
    },
  ]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
    document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [language, darkMode]);

  const navigateTo = (p) => setPage(p);

  const deleteAssociation = (id) => {
    if (window.confirm(t("confirmDelete"))) {
      setAssociations(associations.filter((assoc) => assoc.id !== id));
    }
  };

  const joinAssociation = (id) => {
    const association = associations.find((assoc) => assoc.id === id);
    if (association && user) {
      const updatedAssociations = associations.map((assoc) => {
        if (assoc.id === id) {
          const isAlreadyMember = assoc.participants.some(
            (p) => p.phone === user.phone
          );
          if (!isAlreadyMember) {
            const newParticipant = {
              phone: user.phone,
              name: user.name,
              order: assoc.participants.length + 1,
              paidMonths: 0,
              isAdmin: false,
            };
            return {
              ...assoc,
              participants: [...assoc.participants, newParticipant],
              membersCount: assoc.membersCount + 1,
              activity: [
                ...assoc.activity,
                {
                  type: "joined",
                  user: user.phone,
                  date: new Date().toISOString().split("T")[0],
                  amount: null,
                },
              ],
            };
          }
        }
        return assoc;
      });
      setAssociations(updatedAssociations);
    }
  };

  const leaveAssociation = (id) => {
    const association = associations.find((assoc) => assoc.id === id);
    if (association && user) {
      const updatedAssociations = associations.map((assoc) => {
        if (assoc.id === id) {
          const isMember = assoc.participants.some(
            (p) => p.phone === user.phone
          );
          if (isMember) {
            return {
              ...assoc,
              participants: assoc.participants.filter(
                (p) => p.phone !== user.phone
              ),
              membersCount: assoc.membersCount - 1,
              activity: [
                ...assoc.activity,
                {
                  type: "left",
                  user: user.phone,
                  date: new Date().toISOString().split("T")[0],
                  amount: null,
                },
              ],
            };
          }
        }
        return assoc;
      });
      setAssociations(updatedAssociations);
    }
  };

  return (
    <div
      className={`app-container ${language === "ar" ? "rtl" : "ltr"} ${
        darkMode ? "dark-mode" : ""
      }`}
    >
      <Navbar bg="primary" variant="dark" expand="lg" className="px-3">
        <Navbar.Brand
          onClick={() => navigateTo("welcome")}
          className="cursor-pointer"
        >
          <FaUsers className="me-2" /> حوش مع صحابك
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigateTo("associations")}>
              <FaHome className="me-1" /> {t("associations")}
            </Nav.Link>
            {user && (
              <Nav.Link onClick={() => navigateTo("profile")}>
                <FaUserCircle className="me-1" /> {t("profile")}
              </Nav.Link>
            )}
            {user && (
              <Nav.Link onClick={() => navigateTo("settings")}>
                <FaCog className="me-1" /> {t("settings")}
              </Nav.Link>
            )}
          </Nav>
          <Nav>
            <Nav.Link onClick={toggleDarkMode}>
              {darkMode ? (
                <span>☀️ {t("lightMode")}</span>
              ) : (
                <span>🌙 {t("darkMode")}</span>
              )}
            </Nav.Link>
            <Nav.Link
              onClick={() => changeLanguage(language === "ar" ? "en" : "ar")}
            >
              <FaLanguage className="me-1" />{" "}
              {language === "ar" ? "English" : "العربية"}
            </Nav.Link>
            {user && (
              <Nav.Link
                onClick={() => {
                  setUser(null);
                  navigateTo("welcome");
                }}
              >
                <FaSignOutAlt className="me-1" /> {t("logout")}
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Container className="py-4">
        <AnimatePresence mode="wait">
          {page === "welcome" && (
            <motion.div
              key="welcome"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <WelcomePage t={t} onStart={() => navigateTo("register")} />
            </motion.div>
          )}
          {page === "register" && (
            <motion.div
              key="register"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <RegisterPage
                t={t}
                setUser={setUser}
                onComplete={() => navigateTo("associations")}
              />
            </motion.div>
          )}
          {page === "associations" && (
            <motion.div
              key="associations"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <AssociationsPage
                t={t}
                associations={associations}
                setAssociations={setAssociations}
                user={user}
                deleteAssociation={deleteAssociation}
                joinAssociation={joinAssociation}
                leaveAssociation={leaveAssociation}
              />
            </motion.div>
          )}
          {page === "settings" && (
            <motion.div
              key="settings"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <SettingsPage
                t={t}
                language={language}
                changeLanguage={changeLanguage}
                user={user}
                setUser={setUser}
                darkMode={darkMode}
                toggleDarkMode={toggleDarkMode}
              />
            </motion.div>
          )}
          {page === "profile" && (
            <motion.div
              key="profile"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ProfilePage t={t} user={user} associations={associations} />
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </div>
  );
}

// Welcome Page Component
function WelcomePage({ t, onStart }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card
        className="text-center p-4 shadow-sm welcome-card"
        style={{ maxWidth: 700, margin: "auto" }}
      >
        <Card.Body>
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Card.Title className="display-4 mb-4">
              {t("welcomeTitle")}
            </Card.Title>
          </motion.div>
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Card.Text className="lead mb-5">{t("welcomeDesc")}</Card.Text>
          </motion.div>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Button onClick={onStart} variant="primary" size="lg">
              {t("startBtn")}
            </Button>
          </motion.div>
        </Card.Body>
      </Card>
    </motion.div>
  );
}

// Register Page Component
function RegisterPage({ t, setUser, onComplete }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    nationalId: "",
    phoneNumber: "",
    profilePhoto: null,
    previewPhoto: null,
  });
  const [paymentMethod, setPaymentMethod] = useState("");
  const [otpCode, setOtpCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        profilePhoto: file,
        previewPhoto: URL.createObjectURL(file),
      });
    }
  };

  const sendOTP = () => {
    if (!formData.name || !formData.nationalId || !formData.phoneNumber) {
      setError(t("error") + ": " + t("allFieldsRequired"));
      return;
    }

    if (!formData.phoneNumber.match(/^01[0-9]{9}$/)) {
      setError(t("error") + ": " + t("invalidPhone"));
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setOtpCode("123456");
      setStep(2);
      setLoading(false);
      setError("");
    }, 1500);
  };

  const verifyOTP = () => {
    if (otpCode.length !== 6) {
      setError(t("error") + ": " + t("otpLength"));
      return;
    }

    setLoading(true);
    setTimeout(() => {
      if (otpCode === "123456") {
        setStep(3);
        setError("");
      } else {
        setError(t("error") + ": " + t("invalidOtp"));
      }
      setLoading(false);
    }, 1000);
  };

  const completeRegistration = () => {
    if (!paymentMethod) {
      setError(t("error") + ": " + t("selectPaymentMethod"));
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setUser({
        name: formData.name,
        nationalId: formData.nationalId,
        phone: formData.phoneNumber,
        paymentMethod,
        profilePhoto: formData.previewPhoto,
        joinDate: new Date().toISOString().split("T")[0],
      });
      setLoading(false);
      onComplete();
    }, 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card
        className="shadow-sm border-0 register-card"
        style={{ maxWidth: 600, margin: "auto" }}
      >
        <Card.Body>
          <Card.Title className="text-center mb-4">
            {t("registerTitle")}
          </Card.Title>

          {error && (
            <Alert variant="danger" onClose={() => setError("")} dismissible>
              {error}
            </Alert>
          )}

          {step === 1 && (
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-4">
                <div className="profile-photo-upload mb-3">
                  {formData.previewPhoto ? (
                    <Image
                      src={formData.previewPhoto}
                      roundedCircle
                      width={120}
                      height={120}
                      className="border"
                    />
                  ) : (
                    <FaUserCircle size={120} className="text-secondary" />
                  )}
                  <label htmlFor="photo-upload" className="upload-btn">
                    <FaCamera size={20} />
                  </label>
                  <input
                    id="photo-upload"
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoChange}
                    style={{ display: "none" }}
                  />
                </div>
                <small className="text-muted">{t("uploadPhoto")}</small>
              </div>

              <Form.Group className="mb-3">
                <Form.Label>{t("name")}</Form.Label>
                <Form.Control
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder={t("name")}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>{t("nationalId")}</Form.Label>
                <Form.Control
                  type="text"
                  value={formData.nationalId}
                  onChange={(e) =>
                    setFormData({ ...formData, nationalId: e.target.value })
                  }
                  placeholder="14 رقمًا"
                  maxLength="14"
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>{t("phoneNumber")}</Form.Label>
                <Form.Control
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={(e) =>
                    setFormData({ ...formData, phoneNumber: e.target.value })
                  }
                  placeholder="01XXXXXXXX"
                />
              </Form.Group>

              <Button
                variant="primary"
                onClick={sendOTP}
                disabled={loading}
                className="w-100"
              >
                {loading ? <Spinner size="sm" className="me-2" /> : null}
                {t("sendOtp")}
              </Button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Alert variant="info" className="mb-4">
                <FaInfoCircle className="me-2" /> {t("otpSent")}
              </Alert>

              <Form.Group className="mb-4">
                <Form.Label>{t("enterOtp")}</Form.Label>
                <Form.Control
                  type="text"
                  value={otpCode}
                  onChange={(e) => setOtpCode(e.target.value)}
                  placeholder="6 أرقام"
                  maxLength="6"
                />
              </Form.Group>

              <Button
                variant="primary"
                onClick={verifyOTP}
                disabled={loading}
                className="w-100"
              >
                {loading ? <Spinner size="sm" className="me-2" /> : null}
                {t("verifyOtp")}
              </Button>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h5 className="mb-4 text-center">{t("paymentMethod")}</h5>

              <Row className="g-3 mb-4">
                <Col md={4}>
                  <Card
                    className={`text-center p-3 cursor-pointer payment-method-card ${
                      paymentMethod === "wallet"
                        ? "border-primary selected"
                        : ""
                    }`}
                    onClick={() => setPaymentMethod("wallet")}
                  >
                    <FaMoneyBillWave size={32} className="mb-2 text-primary" />
                    <Card.Text>{t("wallet")}</Card.Text>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card
                    className={`text-center p-3 cursor-pointer payment-method-card ${
                      paymentMethod === "bank" ? "border-primary selected" : ""
                    }`}
                    onClick={() => setPaymentMethod("bank")}
                  >
                    <FaMoneyBillWave size={32} className="mb-2 text-primary" />
                    <Card.Text>{t("bankAccount")}</Card.Text>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card
                    className={`text-center p-3 cursor-pointer payment-method-card ${
                      paymentMethod === "meeza" ? "border-primary selected" : ""
                    }`}
                    onClick={() => setPaymentMethod("meeza")}
                  >
                    <FaMoneyBillWave size={32} className="mb-2 text-primary" />
                    <Card.Text>{t("meezaCard")}</Card.Text>
                  </Card>
                </Col>
              </Row>

              <Button
                variant="primary"
                onClick={completeRegistration}
                disabled={loading || !paymentMethod}
                className="w-100"
              >
                {loading ? <Spinner size="sm" className="me-2" /> : null}
                {t("submit")}
              </Button>
            </motion.div>
          )}
        </Card.Body>
      </Card>
    </motion.div>
  );
}

// Associations Page Component
function AssociationsPage({
  t,
  associations,
  setAssociations,
  user,
  deleteAssociation,
  joinAssociation,
  leaveAssociation,
}) {
  const [filter, setFilter] = useState({
    membersCount: "",
    installment: "",
    duration: "",
  });
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newAssoc, setNewAssoc] = useState({
    name: "",
    membersCount: "",
    installment: "",
    duration: "",
    participants: "",
    type: "rotating",
    frequency: "monthly",
    currency: "EGP",
    privacy: "private",
    description: "",
    startDate: new Date().toISOString().split("T")[0],
    rules: [],
  });
  const [newRule, setNewRule] = useState("");
  const [createSuccess, setCreateSuccess] = useState(false);
  const [error, setError] = useState("");
  const [viewMode, setViewMode] = useState("all"); // 'all', 'my', 'requests'
  const [selectedAssoc, setSelectedAssoc] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  const filteredAssociations = associations.filter((assoc) => {
    const matchesFilter =
      (filter.membersCount === "" ||
        assoc.membersCount === Number(filter.membersCount)) &&
      (filter.installment === "" ||
        assoc.installment === Number(filter.installment)) &&
      (filter.duration === "" || assoc.duration === Number(filter.duration)); // <-- قفلت القوس هنا

    if (viewMode === "my") {
      return (
        matchesFilter &&
        user &&
        assoc.participants.some((p) => p.phone === user.phone)
      );
    } else if (viewMode === "requests") {
      return (
        matchesFilter &&
        user &&
        assoc.creator === user.phone &&
        assoc.requests.length > 0
      );
    }

    return matchesFilter;
  });

  const addRule = () => {
    if (newRule.trim()) {
      setNewAssoc({
        ...newAssoc,
        rules: [...newAssoc.rules, newRule.trim()],
      });
      setNewRule("");
    }
  };

  const removeRule = (index) => {
    const updatedRules = [...newAssoc.rules];
    updatedRules.splice(index, 1);
    setNewAssoc({ ...newAssoc, rules: updatedRules });
  };

  const createAssociation = () => {
    if (!newAssoc.name.trim()) {
      setError(t("error") + ": " + t("associationNameRequired"));
      return;
    }

    const membersCountNum = Number(newAssoc.membersCount);
    if (!membersCountNum || membersCountNum < 2) {
      setError(t("error") + ": " + t("minMembers"));
      return;
    }

    const installmentNum = Number(newAssoc.installment);
    if (!installmentNum || installmentNum <= 0) {
      setError(t("error") + ": " + t("invalidInstallment"));
      return;
    }

    const durationNum = Number(newAssoc.duration);
    if (!durationNum || durationNum <= 0) {
      setError(t("error") + ": " + t("invalidDuration"));
      return;
    }

    let phones = [];
    if (newAssoc.privacy !== "public") {
      phones = newAssoc.participants
        .split(",")
        .map((p) => p.trim())
        .filter((p) => p.match(/^01[0-9]{9}$/));

      if (phones.length < 1 && newAssoc.privacy === "private") {
        setError(t("error") + ": " + t("invalidParticipants"));
        return;
      }
    }

    const newAssociation = {
      id: Date.now(),
      name: newAssoc.name,
      creator: user.phone,
      membersCount: newAssoc.privacy === "public" ? 1 : phones.length + 1,
      installment: installmentNum,
      duration: durationNum,
      type: newAssoc.type,
      frequency: newAssoc.frequency,
      currency: newAssoc.currency,
      privacy: newAssoc.privacy,
      description: newAssoc.description,
      startDate: newAssoc.startDate,
      participants: [
        {
          phone: user.phone,
          name: user.name,
          order: 1,
          paidMonths: 0,
          isAdmin: true,
        },
        ...phones.map((phone, index) => ({
          phone,
          name: `مستخدم ${index + 1}`,
          order: index + 2,
          paidMonths: 0,
          isAdmin: false,
        })),
      ],
      rules: newAssoc.rules,
      activity: [
        {
          type: "created",
          user: user.phone,
          date: new Date().toISOString().split("T")[0],
          amount: null,
        },
      ],
      requests: [],
    };

    setAssociations([newAssociation, ...associations]);
    setCreateSuccess(true);
    setError("");
    setNewAssoc({
      name: "",
      membersCount: "",
      installment: "",
      duration: "",
      participants: "",
      type: "rotating",
      frequency: "monthly",
      currency: "EGP",
      privacy: "private",
      description: "",
      startDate: new Date().toISOString().split("T")[0],
      rules: [],
    });
    setShowCreateModal(false);

    setTimeout(() => setCreateSuccess(false), 4000);
  };

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AF19FF"];

  const handleViewDetails = (assoc) => {
    setSelectedAssoc(assoc);
    setShowDetailsModal(true);
  };

  const approveRequest = (assocId, phone) => {
    setAssociations(
      associations.map((assoc) => {
        if (assoc.id === assocId) {
          const request = assoc.requests.find((r) => r.phone === phone);
          if (request) {
            return {
              ...assoc,
              participants: [
                ...assoc.participants,
                {
                  phone: request.phone,
                  name: request.name,
                  order: assoc.participants.length + 1,
                  paidMonths: 0,
                  isAdmin: false,
                },
              ],
              membersCount: assoc.membersCount + 1,
              requests: assoc.requests.filter((r) => r.phone !== phone),
              activity: [
                ...assoc.activity,
                {
                  type: "requestApproved",
                  user: user.phone,
                  date: new Date().toISOString().split("T")[0],
                  amount: null,
                },
                {
                  type: "joined",
                  user: request.phone,
                  date: new Date().toISOString().split("T")[0],
                  amount: null,
                },
              ],
            };
          }
        }
        return assoc;
      })
    );
  };

  const rejectRequest = (assocId, phone) => {
    setAssociations(
      associations.map((assoc) => {
        if (assoc.id === assocId) {
          return {
            ...assoc,
            requests: assoc.requests.filter((r) => r.phone !== phone),
            activity: [
              ...assoc.activity,
              {
                type: "requestRejected",
                user: user.phone,
                date: new Date().toISOString().split("T")[0],
                amount: null,
              },
            ],
          };
        }
        return assoc;
      })
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3>
          {viewMode === "my" && t("myAssociations")}
          {viewMode === "requests" && t("joinRequests")}
          {viewMode === "all" && t("associations")}
        </h3>
        {user && (
          <div>
            <Button
              variant={viewMode === "all" ? "primary" : "outline-primary"}
              className="me-2"
              onClick={() => setViewMode("all")}
            >
              {t("allAssociations")}
            </Button>
            <Button
              variant={viewMode === "my" ? "primary" : "outline-primary"}
              className="me-2"
              onClick={() => setViewMode("my")}
            >
              {t("myAssociations")}
            </Button>
            {associations.some(
              (a) => a.creator === user?.phone && a.requests.length > 0
            ) && (
              <Button
                variant={
                  viewMode === "requests" ? "primary" : "outline-primary"
                }
                onClick={() => setViewMode("requests")}
              >
                {t("joinRequests")}{" "}
                <Badge bg="danger">
                  {associations.reduce(
                    (count, a) =>
                      a.creator === user?.phone
                        ? count + a.requests.length
                        : count,
                    0
                  )}
                </Badge>
              </Button>
            )}
          </div>
        )}
      </div>

      <Card className="mb-4 p-3 shadow-sm">
        <Form>
          <Row>
            <Col md={3}>
              <Form.Group>
                <Form.Label>{t("membersCount")}</Form.Label>
                <Form.Control
                  type="number"
                  value={filter.membersCount}
                  onChange={(e) =>
                    setFilter({ ...filter, membersCount: e.target.value })
                  }
                  min={0}
                />
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group>
                <Form.Label>{t("installmentValue")}</Form.Label>
                <Form.Control
                  type="number"
                  value={filter.installment}
                  onChange={(e) =>
                    setFilter({ ...filter, installment: e.target.value })
                  }
                  min={0}
                />
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group>
                <Form.Label>{t("durationMonths")}</Form.Label>
                <Form.Control
                  type="number"
                  value={filter.duration}
                  onChange={(e) =>
                    setFilter({ ...filter, duration: e.target.value })
                  }
                  min={0}
                />
              </Form.Group>
            </Col>
            <Col md={3} className="d-flex align-items-end">
              <Button
                variant="secondary"
                onClick={() =>
                  setFilter({ membersCount: "", installment: "", duration: "" })
                }
              >
                {t("clearFilters")}
              </Button>
            </Col>
          </Row>
        </Form>
      </Card>

      {createSuccess && (
        <Alert
          variant="success"
          onClose={() => setCreateSuccess(false)}
          dismissible
        >
          {t("createAssocSuccess")}
        </Alert>
      )}

      {error && <Alert variant="danger">{error}</Alert>}

      {filteredAssociations.length === 0 && (
        <Alert variant="info">{t("noAssociations")}</Alert>
      )}

      {user && viewMode !== "requests" && (
        <div className="text-end mb-3">
          <Button variant="success" onClick={() => setShowCreateModal(true)}>
            <FaPlusCircle className="me-2" /> {t("createNewAssoc")}
          </Button>
        </div>
      )}

      {viewMode === "requests" && (
        <Card className="mb-4 shadow-sm">
          <Card.Body>
            <h5 className="mb-4">{t("joinRequests")}</h5>
            {filteredAssociations.length === 0 ? (
              <Alert variant="info">{t("noRequests")}</Alert>
            ) : (
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>{t("association")}</th>
                    <th>{t("name")}</th>
                    <th>{t("phoneNumber")}</th>
                    <th>{t("date")}</th>
                    <th>{t("actions")}</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredAssociations.flatMap((assoc) =>
                    assoc.requests.map((request, idx) => (
                      <tr key={`${assoc.id}-${request.phone}`}>
                        <td>{assoc.name}</td>
                        <td>{request.name}</td>
                        <td>{request.phone}</td>
                        <td>{request.date}</td>
                        <td>
                          <Button
                            variant="success"
                            size="sm"
                            className="me-2"
                            onClick={() =>
                              approveRequest(assoc.id, request.phone)
                            }
                          >
                            {t("approveRequest")}
                          </Button>
                          <Button
                            variant="danger"
                            size="sm"
                            onClick={() =>
                              rejectRequest(assoc.id, request.phone)
                            }
                          >
                            {t("rejectRequest")}
                          </Button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </Table>
            )}
          </Card.Body>
        </Card>
      )}

      {viewMode !== "requests" && (
        <Row xs={1} md={2} lg={3} className="g-4">
          {filteredAssociations.map((assoc) => (
            <Col key={assoc.id}>
              <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                <Card className="h-100 shadow-sm">
                  <Card.Body>
                    <div className="d-flex justify-content-between align-items-start">
                      <Card.Title>{assoc.name}</Card.Title>
                      {user?.phone === assoc.creator && (
                        <Button
                          variant="danger"
                          size="sm"
                          onClick={() => deleteAssociation(assoc.id)}
                        >
                          <FaTrash />
                        </Button>
                      )}
                    </div>
                    <Card.Subtitle className="mb-2 text-muted small">
                      {t("creator")}:{" "}
                      {assoc.participants.find((p) => p.phone === assoc.creator)
                        ?.name || assoc.creator}
                    </Card.Subtitle>
                    <Card.Text>
                      {t("type")}: {t(assoc.type)} <br />
                      {t("membersCount")}: {assoc.membersCount} <br />
                      {t("installmentValue")}: {assoc.installment}{" "}
                      {t(assoc.currency)} <br />
                      {t("durationMonths")}: {assoc.duration}
                    </Card.Text>

                    <div className="mb-3">
                      <Button
                        variant="outline-primary"
                        size="sm"
                        className="me-2"
                        onClick={() => handleViewDetails(assoc)}
                      >
                        {t("viewDetails")}
                      </Button>

                      {user &&
                      assoc.participants.some((p) => p.phone === user.phone) ? (
                        <Button
                          variant="outline-danger"
                          size="sm"
                          onClick={() => leaveAssociation(assoc.id)}
                        >
                          {t("leave")}
                        </Button>
                      ) : user && assoc.creator !== user.phone ? (
                        <Button
                          variant="primary"
                          size="sm"
                          onClick={() => joinAssociation(assoc.id)}
                          disabled={
                            assoc.privacy === "private" &&
                            !assoc.participants.some(
                              (p) => p.phone === user.phone
                            )
                          }
                        >
                          {t("join")}
                        </Button>
                      ) : null}
                    </div>

                    <ResponsiveContainer width="100%" height={150}>
                      <PieChart>
                        <Pie
                          data={[
                            {
                              name: t("paid"),
                              value: assoc.participants.reduce(
                                (a, p) => a + p.paidMonths,
                                0
                              ),
                            },
                            {
                              name: t("unpaid"),
                              value:
                                assoc.duration * assoc.membersCount -
                                assoc.participants.reduce(
                                  (a, p) => a + p.paidMonths,
                                  0
                                ),
                            },
                          ]}
                          dataKey="value"
                          innerRadius={40}
                          outerRadius={60}
                          label
                        >
                          <Cell fill="#0088FE" />
                          <Cell fill="#FF8042" />
                        </Pie>
                        <Tooltip />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      )}

      {/* Create Association Modal */}
      <Modal
        show={showCreateModal}
        onHide={() => setShowCreateModal(false)}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>{t("createNewAssoc")}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group>
                  <Form.Label>{t("associationName")}</Form.Label>
                  <Form.Control
                    type="text"
                    value={newAssoc.name}
                    onChange={(e) =>
                      setNewAssoc({ ...newAssoc, name: e.target.value })
                    }
                  />
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group>
                  <Form.Label>{t("associationType")}</Form.Label>
                  <Form.Select
                    value={newAssoc.type}
                    onChange={(e) =>
                      setNewAssoc({ ...newAssoc, type: e.target.value })
                    }
                  >
                    <option value="rotating">{t("rotating")}</option>
                    <option value="regular">{t("regular")}</option>
                    <option value="bidding">{t("bidding")}</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group>
                  <Form.Label>{t("associationFrequency")}</Form.Label>
                  <Form.Select
                    value={newAssoc.frequency}
                    onChange={(e) =>
                      setNewAssoc({ ...newAssoc, frequency: e.target.value })
                    }
                  >
                    <option value="monthly">{t("monthly")}</option>
                    <option value="weekly">{t("weekly")}</option>
                    <option value="biweekly">{t("biweekly")}</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={4}>
                <Form.Group>
                  <Form.Label>{t("membersCount")}</Form.Label>
                  <Form.Control
                    type="number"
                    min={2}
                    value={newAssoc.membersCount}
                    onChange={(e) =>
                      setNewAssoc({ ...newAssoc, membersCount: e.target.value })
                    }
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group>
                  <Form.Label>{t("installmentValue")}</Form.Label>
                  <Form.Control
                    type="number"
                    min={1}
                    value={newAssoc.installment}
                    onChange={(e) =>
                      setNewAssoc({ ...newAssoc, installment: e.target.value })
                    }
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group>
                  <Form.Label>{t("durationMonths")}</Form.Label>
                  <Form.Control
                    type="number"
                    min={1}
                    value={newAssoc.duration}
                    onChange={(e) =>
                      setNewAssoc({ ...newAssoc, duration: e.target.value })
                    }
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <Form.Group>
                  <Form.Label>{t("associationCurrency")}</Form.Label>
                  <Form.Select
                    value={newAssoc.currency}
                    onChange={(e) =>
                      setNewAssoc({ ...newAssoc, currency: e.target.value })
                    }
                  >
                    <option value="EGP">{t("EGP")}</option>
                    <option value="USD">{t("USD")}</option>
                    <option value="EUR">{t("EUR")}</option>
                    <option value="SAR">{t("SAR")}</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>{t("associationPrivacy")}</Form.Label>
                  <Form.Select
                    value={newAssoc.privacy}
                    onChange={(e) =>
                      setNewAssoc({ ...newAssoc, privacy: e.target.value })
                    }
                  >
                    <option value="public">{t("public")}</option>
                    <option value="private">{t("private")}</option>
                    <option value="byInvitation">{t("byInvitation")}</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label>{t("startDate")}</Form.Label>
              <Form.Control
                type="date"
                value={newAssoc.startDate}
                onChange={(e) =>
                  setNewAssoc({ ...newAssoc, startDate: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>{t("associationDescription")}</Form.Label>
              <Form.Control
                as="textarea"
                rows={2}
                placeholder={t("enterDescription")}
                value={newAssoc.description}
                onChange={(e) =>
                  setNewAssoc({ ...newAssoc, description: e.target.value })
                }
              />
            </Form.Group>

            {newAssoc.privacy !== "public" && (
              <Form.Group className="mb-3">
                <Form.Label>{t("inviteParticipants")}</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={2}
                  placeholder="010xxxxxxxx, 011xxxxxxxx"
                  value={newAssoc.participants}
                  onChange={(e) =>
                    setNewAssoc({ ...newAssoc, participants: e.target.value })
                  }
                />
              </Form.Group>
            )}

            <Form.Group className="mb-3">
              <Form.Label>{t("associationRules")}</Form.Label>
              <div className="d-flex mb-2">
                <Form.Control
                  type="text"
                  value={newRule}
                  onChange={(e) => setNewRule(e.target.value)}
                  placeholder={t("rule")}
                />
                <Button
                  variant="outline-primary"
                  className="ms-2"
                  onClick={addRule}
                >
                  {t("add")}
                </Button>
              </div>
              {newAssoc.rules.length > 0 ? (
                <ul className="list-group">
                  {newAssoc.rules.map((rule, index) => (
                    <li
                      key={index}
                      className="list-group-item d-flex justify-content-between align-items-center"
                    >
                      {rule}
                      <Button
                        variant="outline-danger"
                        size="sm"
                        onClick={() => removeRule(index)}
                      >
                        {t("remove")}
                      </Button>
                    </li>
                  ))}
                </ul>
              ) : (
                <Alert variant="info">{t("noRules")}</Alert>
              )}
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowCreateModal(false)}>
            {t("cancel")}
          </Button>
          <Button variant="primary" onClick={createAssociation}>
            {t("createNewAssoc")}
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Association Details Modal */}
      <Modal
        show={showDetailsModal}
        onHide={() => setShowDetailsModal(false)}
        size="lg"
      >
        {selectedAssoc && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selectedAssoc.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row>
                <Col md={6}>
                  <h5>{t("associationDetails")}</h5>
                  <p>{selectedAssoc.description}</p>

                  <Table striped bordered size="sm" className="mt-3">
                    <tbody>
                      <tr>
                        <td>{t("type")}</td>
                        <td>{t(selectedAssoc.type)}</td>
                      </tr>
                      <tr>
                        <td>{t("frequency")}</td>
                        <td>{t(selectedAssoc.frequency)}</td>
                      </tr>
                      <tr>
                        <td>{t("membersCount")}</td>
                        <td>{selectedAssoc.membersCount}</td>
                      </tr>
                      <tr>
                        <td>{t("installmentValue")}</td>
                        <td>
                          {selectedAssoc.installment}{" "}
                          {t(selectedAssoc.currency)}
                        </td>
                      </tr>
                      <tr>
                        <td>{t("durationMonths")}</td>
                        <td>{selectedAssoc.duration}</td>
                      </tr>
                      <tr>
                        <td>{t("startDate")}</td>
                        <td>{selectedAssoc.startDate}</td>
                      </tr>
                      <tr>
                        <td>{t("privacy")}</td>
                        <td>{t(selectedAssoc.privacy)}</td>
                      </tr>
                    </tbody>
                  </Table>

                  <h5 className="mt-4">{t("associationRules")}</h5>
                  {selectedAssoc.rules.length > 0 ? (
                    <ul>
                      {selectedAssoc.rules.map((rule, index) => (
                        <li key={index}>{rule}</li>
                      ))}
                    </ul>
                  ) : (
                    <Alert variant="info">{t("noRules")}</Alert>
                  )}
                </Col>
                <Col md={6}>
                  <h5>{t("members")}</h5>
                  <div className="table-responsive">
                    <Table striped bordered size="sm">
                      <thead>
                        <tr>
                          <th>{t("name")}</th>
                          <th>{t("phoneNumber")}</th>
                          <th>{t("status")}</th>
                          <th>{t("paidMonths")}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {selectedAssoc.participants.map((p) => (
                          <tr key={p.phone}>
                            <td>
                              {p.name}{" "}
                              {p.isAdmin && (
                                <Badge bg="info">{t("associationAdmin")}</Badge>
                              )}
                            </td>
                            <td>{p.phone}</td>
                            <td>
                              {p.phone === user?.phone ? (
                                <Badge bg="warning">{t("yourTurn")}</Badge>
                              ) : (
                                <Badge bg="secondary">{t("pending")}</Badge>
                              )}
                            </td>
                            <td>
                              {p.paidMonths} / {selectedAssoc.duration}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </div>

                  <h5 className="mt-4">{t("paymentStats")}</h5>
                  <ResponsiveContainer width="100%" height={200}>
                    <BarChart
                      data={[
                        {
                          name: t("paid"),
                          value: selectedAssoc.participants.reduce(
                            (a, p) => a + p.paidMonths,
                            0
                          ),
                        },
                        {
                          name: t("unpaid"),
                          value:
                            selectedAssoc.duration *
                              selectedAssoc.membersCount -
                            selectedAssoc.participants.reduce(
                              (a, p) => a + p.paidMonths,
                              0
                            ),
                        },
                      ]}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="value" fill="#0088FE" />
                    </BarChart>
                  </ResponsiveContainer>
                </Col>
              </Row>

              <h5 className="mt-4">{t("associationActivity")}</h5>
              {selectedAssoc.activity.length > 0 ? (
                <div className="activity-timeline">
                  {selectedAssoc.activity.slice(0, 5).map((act, index) => (
                    <div key={index} className="activity-item mb-3">
                      <div className="d-flex">
                        <div className="flex-shrink-0 me-3">
                          <FaUserCircle size={24} />
                        </div>
                        <div>
                          <strong>
                            {selectedAssoc.participants.find(
                              (p) => p.phone === act.user
                            )?.name || act.user}
                          </strong>{" "}
                          {t(`activity.${act.type}`)}{" "}
                          {act.amount && (
                            <strong>
                              {act.amount} {t(selectedAssoc.currency)}
                            </strong>
                          )}
                          <div className="text-muted small">{act.date}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                  {selectedAssoc.activity.length > 5 && (
                    <Button variant="link" size="sm">
                      {t("viewAll")}
                    </Button>
                  )}
                </div>
              ) : (
                <Alert variant="info">{t("noActivity")}</Alert>
              )}
            </Modal.Body>
            <Modal.Footer>
              {user &&
                selectedAssoc.participants.some(
                  (p) => p.phone === user.phone
                ) && <Button variant="primary">{t("makePayment")}</Button>}
              {user &&
                !selectedAssoc.participants.some(
                  (p) => p.phone === user.phone
                ) && (
                  <Button
                    variant="primary"
                    onClick={() => {
                      joinAssociation(selectedAssoc.id);
                      setShowDetailsModal(false);
                    }}
                  >
                    {t("join")}
                  </Button>
                )}
              <Button
                variant="secondary"
                onClick={() => setShowDetailsModal(false)}
              >
                {t("close")}
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </motion.div>
  );
}

// Settings Page Component
function SettingsPage({
  t,
  language,
  changeLanguage,
  user,
  setUser,
  darkMode,
  toggleDarkMode,
}) {
  const [formData, setFormData] = useState({
    phone: user?.phone || "",
    name: user?.name || "",
    nationalId: user?.nationalId || "",
    paymentMethod: user?.paymentMethod || "",
    profilePhoto: user?.profilePhoto || null,
  });
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [photoFile, setPhotoFile] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(user?.profilePhoto || null);

  const handleSave = () => {
    setLoading(true);
    setTimeout(() => {
      setUser({
        ...user,
        name: formData.name,
        phone: formData.phone,
        nationalId: formData.nationalId,
        paymentMethod: formData.paymentMethod,
        profilePhoto: photoPreview,
      });
      setLoading(false);
      setSuccess(true);
      setIsEditing(false);
      setTimeout(() => setSuccess(false), 3000);
    }, 1000);
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhotoFile(file);
      setPhotoPreview(URL.createObjectURL(file));
    }
  };

  useEffect(() => {
    document.documentElement.style.fontSize = fontSize + "px";
  }, [fontSize]);

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h3>{t("settings")}</h3>

      <Card className="shadow-sm border-0">
        <Card.Body>
          <Row>
            <Col md={6}>
              <h5 className="mb-3">{t("profile")}</h5>
              <Form>
                <div className="text-center mb-4">
                  <div className="profile-photo-upload">
                    {photoPreview ? (
                      <Image
                        src={photoPreview}
                        roundedCircle
                        width={120}
                        height={120}
                        className="border"
                      />
                    ) : (
                      <FaUserCircle size={120} className="text-secondary" />
                    )}
                    {isEditing && (
                      <>
                        <label
                          htmlFor="profile-photo-upload"
                          className="upload-btn"
                        >
                          <FaCamera size={20} />
                        </label>
                        <input
                          id="profile-photo-upload"
                          type="file"
                          accept="image/*"
                          onChange={handlePhotoChange}
                          style={{ display: "none" }}
                        />
                      </>
                    )}
                  </div>
                  {isEditing && (
                    <small className="text-muted">{t("changePhoto")}</small>
                  )}
                </div>

                <Form.Group className="mb-3">
                  <Form.Label>{t("name")}</Form.Label>
                  <Form.Control
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    disabled={!isEditing}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>{t("nationalId")}</Form.Label>
                  <Form.Control
                    type="text"
                    value={formData.nationalId}
                    onChange={(e) =>
                      setFormData({ ...formData, nationalId: e.target.value })
                    }
                    disabled={!isEditing}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>{t("phoneNumber")}</Form.Label>
                  <Form.Control
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    disabled={!isEditing}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>{t("paymentMethod")}</Form.Label>
                  <Form.Select
                    value={formData.paymentMethod}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        paymentMethod: e.target.value,
                      })
                    }
                    disabled={!isEditing}
                  >
                    <option value="">{t("selectPaymentMethod")}</option>
                    <option value="wallet">{t("wallet")}</option>
                    <option value="bank">{t("bankAccount")}</option>
                    <option value="meeza">{t("meezaCard")}</option>
                  </Form.Select>
                </Form.Group>

                <div className="d-flex justify-content-end">
                  {isEditing ? (
                    <>
                      <Button
                        variant="outline-secondary"
                        onClick={() => {
                          setIsEditing(false);
                          setPhotoPreview(user?.profilePhoto || null);
                        }}
                        className="me-2"
                      >
                        {t("cancel")}
                      </Button>
                      <Button
                        variant="primary"
                        onClick={handleSave}
                        disabled={loading}
                      >
                        {loading ? (
                          <Spinner size="sm" className="me-2" />
                        ) : null}
                        {t("save")}
                      </Button>
                    </>
                  ) : (
                    <Button
                      variant="primary"
                      onClick={() => setIsEditing(true)}
                    >
                      {t("edit")}
                    </Button>
                  )}
                </div>
              </Form>
            </Col>

            <Col md={6}>
              <h5 className="mb-3">{t("language")}</h5>
              <Card className="mb-4">
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <h6>{t("currentLanguage")}</h6>
                      <p className="text-muted">
                        {language === "ar" ? t("arabic") : t("english")}
                      </p>
                    </div>
                    <Button
                      variant="outline-primary"
                      onClick={() =>
                        changeLanguage(language === "ar" ? "en" : "ar")
                      }
                    >
                      {t("changeTo")}{" "}
                      {language === "ar" ? t("english") : t("arabic")}
                    </Button>
                  </div>
                </Card.Body>
              </Card>

              <h5 className="mb-3">{t("theme")}</h5>
              <Card className="mb-4">
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <h6>{t("currentTheme")}</h6>
                      <p className="text-muted">
                        {darkMode ? t("darkMode") : t("lightMode")}
                      </p>
                    </div>
                    <Button variant="outline-primary" onClick={toggleDarkMode}>
                      {darkMode ? t("lightMode") : t("darkMode")}
                    </Button>
                  </div>
                </Card.Body>
              </Card>

              <h5 className="mb-3">{t("fontSize")}</h5>
              <Card className="mb-4">
                <Card.Body>
                  <Form.Range
                    min={12}
                    max={24}
                    value={fontSize}
                    onChange={(e) => setFontSize(e.target.value)}
                  />
                  <div className="d-flex justify-content-between">
                    <small>Aa</small>
                    <small className="fs-5">Aa</small>
                    <small className="fs-3">Aa</small>
                  </div>
                </Card.Body>
              </Card>

              <h5 className="mb-3">{t("notifications")}</h5>
              <Card>
                <Card.Body>
                  <Form.Check
                    type="switch"
                    id="payment-notifications"
                    label={t("paymentNotifications")}
                    defaultChecked
                  />
                  <Form.Check
                    type="switch"
                    id="turn-notifications"
                    label={t("turnNotifications")}
                    defaultChecked
                    className="mt-2"
                  />
                  <Form.Check
                    type="switch"
                    id="app-updates"
                    label={t("appUpdates")}
                    defaultChecked
                    className="mt-2"
                  />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </motion.div>
  );
}

// Profile Page Component
function ProfilePage({ t, user, associations }) {
  if (!user) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Alert variant="warning">{t("noUser")}</Alert>
      </motion.div>
    );
  }

  const userAssociations = associations.filter((assoc) =>
    assoc.participants.some((p) => p.phone === user.phone)
  );

  const stats = [
    {
      label: t("participatingAssociations"),
      value: userAssociations.length,
      icon: FaUsers,
    },
    {
      label: t("totalPayments"),
      value:
        userAssociations.reduce((sum, assoc) => {
          const participant = assoc.participants.find(
            (p) => p.phone === user.phone
          );
          return (
            sum + (participant ? participant.paidMonths * assoc.installment : 0)
          );
        }, 0) +
        " " +
        (userAssociations[0]?.currency
          ? t(userAssociations[0].currency)
          : t("EGP")),
      icon: FaMoneyBillWave,
    },
    {
      label: t("completedAssociations"),
      value: userAssociations.filter((assoc) => {
        const participant = assoc.participants.find(
          (p) => p.phone === user.phone
        );
        return participant && participant.paidMonths >= assoc.duration;
      }).length,
      icon: FaCalendarAlt,
    },
    {
      label: t("upcoming"),
      value: userAssociations.filter((assoc) => {
        const participant = assoc.participants.find(
          (p) => p.phone === user.phone
        );
        return participant && participant.paidMonths < assoc.duration;
      }).length,
      icon: FaInfoCircle,
    },
  ];

  const recentAssociations = userAssociations
    .sort((a, b) => new Date(b.startDate) - new Date(a.startDate))
    .slice(0, 3)
    .map((assoc) => {
      const participant = assoc.participants.find(
        (p) => p.phone === user.phone
      );
      const isCompleted =
        participant && participant.paidMonths >= assoc.duration;

      return {
        id: assoc.id,
        name: assoc.name,
        status: isCompleted ? t("completed") : t("ongoing"),
        nextPayment: isCompleted
          ? "-"
          : `${assoc.installment} ${t(assoc.currency)}`,
        amount: assoc.installment,
        currency: assoc.currency,
        paidMonths: participant ? participant.paidMonths : 0,
        totalMonths: assoc.duration,
      };
    });

  const paymentHistory = userAssociations
    .flatMap((assoc) => {
      const participant = assoc.participants.find(
        (p) => p.phone === user.phone
      );
      if (!participant) return [];

      return Array.from({ length: participant.paidMonths }, (_, i) => ({
        id: `${assoc.id}-${i}`,
        association: assoc.name,
        date: `${assoc.startDate.split("-")[0]}-${
          ((assoc.startDate.split("-")[1] + i) % 12) + 1
        }-01`,
        amount: assoc.installment,
        currency: assoc.currency,
        status: "verified",
      }));
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="shadow-sm border-0 mb-4">
        <Card.Body className="p-4">
          <Row className="align-items-center">
            <Col md={2} className="text-center">
              {user.profilePhoto ? (
                <Image
                  src={user.profilePhoto}
                  roundedCircle
                  width={120}
                  height={120}
                  className="border"
                />
              ) : (
                <FaUserCircle size={120} className="text-primary" />
              )}
            </Col>
            <Col md={4}>
              <h4>
                {t("welcome")}, {user.name}
              </h4>
              <p className="text-muted mb-1">
                {t("memberSince")}: {user.joinDate}
              </p>
              <p className="text-muted">
                {t("phoneNumber")}: {user.phone}
              </p>
            </Col>
            <Col md={6}>
              <Row className="g-3">
                {stats.map((stat, index) => (
                  <Col key={index} xs={6}>
                    <Card className="h-100">
                      <Card.Body className="text-center">
                        <stat.icon size={24} className="text-primary mb-2" />
                        <h5>{stat.value}</h5>
                        <p className="small text-muted mb-0">{stat.label}</p>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <Row className="g-4">
        <Col md={6}>
          <Card className="h-100 shadow-sm border-0">
            <Card.Body>
              <Card.Title className="mb-4">
                <FaCalendarAlt className="me-2" /> {t("currentAssociations")}
              </Card.Title>
              <div className="table-responsive">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>{t("association")}</th>
                      <th>{t("status")}</th>
                      <th>{t("paidMonths")}</th>
                      <th>{t("nextPayment")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentAssociations.map((assoc) => (
                      <tr key={assoc.id}>
                        <td>{assoc.name}</td>
                        <td>
                          <Badge
                            bg={
                              assoc.status === t("completed")
                                ? "success"
                                : "warning"
                            }
                          >
                            {assoc.status}
                          </Badge>
                        </td>
                        <td>
                          {assoc.paidMonths} / {assoc.totalMonths}
                        </td>
                        <td>{assoc.nextPayment}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="h-100 shadow-sm border-0">
            <Card.Body>
              <Card.Title className="mb-4">
                <FaMoneyBillWave className="me-2" /> {t("paymentHistory")}
              </Card.Title>
              <div className="table-responsive">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>{t("association")}</th>
                      <th>{t("paymentDate")}</th>
                      <th>{t("amount")}</th>
                      <th>{t("status")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paymentHistory.length > 0 ? (
                      paymentHistory.map((payment) => (
                        <tr key={payment.id}>
                          <td>{payment.association}</td>
                          <td>{payment.date}</td>
                          <td>
                            {payment.amount} {t(payment.currency)}
                          </td>
                          <td>
                            <Badge
                              bg={
                                payment.status === "verified"
                                  ? "success"
                                  : "warning"
                              }
                            >
                              {t(payment.status)}
                            </Badge>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="4" className="text-center">
                          {t("noActivity")}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </motion.div>
  );
}
