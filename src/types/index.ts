// أنواع البيانات الأساسية لتطبيق نائبك
// مبنية على النماذج الموجودة في المخزن

// ==================== أنواع المستخدمين ====================
export type UserType = 'citizen' | 'candidate' | 'current_member';

export interface User {
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  user_type: UserType;
  is_active: boolean;
  is_verified: boolean;
  date_joined: string;
  last_login?: string;
  profile_picture?: string;
}

// ==================== المحافظات والأحزاب ====================
export interface Governorate {
  id: number;
  name_ar: string;
  name_en: string;
  code: string;
  population?: number;
  area_km2?: number;
  capital?: string;
  is_active: boolean;
}

export interface Party {
  id: number;
  name_ar: string;
  name_en: string;
  abbreviation: string;
  color_code: string;
  logo?: string;
  founded_year?: number;
  description?: string;
  website?: string;
  is_active: boolean;
}

// ==================== الملفات الشخصية ====================
export interface CitizenProfile {
  id: number;
  user: number;
  governorate: number;
  national_id: string;
  date_of_birth: string;
  gender: 'male' | 'female';
  address: string;
  occupation?: string;
  education_level?: string;
  interests?: string[];
  preferred_contact_method: 'email' | 'phone' | 'sms';
  receive_notifications: boolean;
  profile_completion: number;
  created_at: string;
  updated_at: string;
}

export interface CandidateProfile {
  id: number;
  user: number;
  governorate: number;
  party?: number;
  constituency: string;
  election_year: number;
  campaign_slogan?: string;
  biography: string;
  education_background: string;
  work_experience: string;
  political_experience?: string;
  achievements?: string;
  campaign_promises: string;
  contact_office_address?: string;
  contact_office_phone?: string;
  social_media_facebook?: string;
  social_media_twitter?: string;
  social_media_instagram?: string;
  social_media_youtube?: string;
  website?: string;
  is_verified: boolean;
  verification_documents?: string[];
  campaign_budget_disclosed?: number;
  transparency_score: number;
  created_at: string;
  updated_at: string;
}

export interface CurrentMemberProfile {
  id: number;
  user: number;
  governorate: number;
  party?: number;
  constituency: string;
  parliament_session: string;
  position?: string;
  committees: string[];
  office_address: string;
  office_phone: string;
  office_hours: string;
  achievements_in_office: string;
  voting_record_public: boolean;
  attendance_rate: number;
  bills_proposed: number;
  bills_passed: number;
  committee_participations: number;
  public_sessions_attended: number;
  social_media_facebook?: string;
  social_media_twitter?: string;
  social_media_instagram?: string;
  social_media_youtube?: string;
  website?: string;
  transparency_score: number;
  performance_rating: number;
  created_at: string;
  updated_at: string;
}

// ==================== الشكاوى ====================
export type ComplaintStatus = 'pending' | 'in_progress' | 'resolved' | 'closed' | 'rejected';
export type ComplaintPriority = 'low' | 'medium' | 'high' | 'urgent';

export interface ComplaintCategory {
  id: number;
  name_ar: string;
  name_en: string;
  description: string;
  icon: string;
  color: string;
  is_active: boolean;
  sort_order: number;
}

export interface ComplaintType {
  id: number;
  category: number;
  name_ar: string;
  name_en: string;
  description: string;
  priority: ComplaintPriority;
  expected_resolution_days: number;
  requires_documents: boolean;
  is_active: boolean;
}

export interface Complaint {
  id: number;
  complaint_number: string;
  citizen: number;
  assigned_member?: number;
  governorate: number;
  category: number;
  complaint_type: number;
  title: string;
  description: string;
  location?: string;
  status: ComplaintStatus;
  priority: ComplaintPriority;
  is_anonymous: boolean;
  is_public: boolean;
  attachments: ComplaintAttachment[];
  updates: ComplaintUpdate[];
  satisfaction_rating?: number;
  satisfaction_comment?: string;
  created_at: string;
  updated_at: string;
  resolved_at?: string;
  expected_resolution_date?: string;
}

export interface ComplaintAttachment {
  id: number;
  complaint: number;
  file_name: string;
  file_path: string;
  file_size: number;
  file_type: string;
  uploaded_at: string;
}

export interface ComplaintUpdate {
  id: number;
  complaint: number;
  updated_by: number;
  status: ComplaintStatus;
  comment: string;
  is_public: boolean;
  created_at: string;
}

// ==================== الرسائل ====================
export type MessageStatus = 'sent' | 'delivered' | 'read' | 'replied';
export type MessagePriority = 'low' | 'medium' | 'high' | 'urgent';

export interface Message {
  id: number;
  sender: number;
  recipient: number;
  subject: string;
  content: string;
  status: MessageStatus;
  priority: MessagePriority;
  is_anonymous: boolean;
  attachments: MessageAttachment[];
  parent_message?: number;
  created_at: string;
  read_at?: string;
  replied_at?: string;
}

export interface MessageAttachment {
  id: number;
  message: number;
  file_name: string;
  file_path: string;
  file_size: number;
  file_type: string;
  uploaded_at: string;
}

// ==================== التقييمات ====================
export interface Rating {
  id: number;
  citizen: number;
  member: number;
  rating: number; // 1-5
  comment?: string;
  category: 'overall' | 'responsiveness' | 'effectiveness' | 'transparency' | 'accessibility';
  is_anonymous: boolean;
  created_at: string;
  updated_at: string;
}

// ==================== الأخبار والمحتوى ====================
export interface NewsItem {
  id: number;
  title: string;
  content: string;
  summary?: string;
  image?: string;
  author?: string;
  source?: string;
  source_url?: string;
  is_breaking: boolean;
  is_featured: boolean;
  tags: string[];
  views_count: number;
  published_at: string;
  created_at: string;
  updated_at: string;
}

export interface Banner {
  id: number;
  title: string;
  description?: string;
  image: string;
  link_url?: string;
  link_text?: string;
  position: 'top' | 'middle' | 'bottom' | 'sidebar';
  is_active: boolean;
  start_date?: string;
  end_date?: string;
  click_count: number;
  created_at: string;
}

// ==================== الإحصائيات ====================
export interface Statistics {
  total_users: number;
  total_citizens: number;
  total_candidates: number;
  total_current_members: number;
  total_complaints: number;
  resolved_complaints: number;
  pending_complaints: number;
  total_messages: number;
  total_ratings: number;
  average_rating: number;
  active_users_today: number;
  active_users_this_week: number;
  active_users_this_month: number;
  complaints_by_status: Record<ComplaintStatus, number>;
  complaints_by_category: Record<string, number>;
  complaints_by_governorate: Record<string, number>;
  user_registrations_this_month: number;
  resolution_rate: number;
  average_resolution_time: number;
}

// ==================== إعدادات النظام ====================
export interface SystemSettings {
  site_name: string;
  site_description: string;
  site_logo?: string;
  site_favicon?: string;
  contact_email: string;
  contact_phone: string;
  contact_address: string;
  facebook_url?: string;
  twitter_url?: string;
  youtube_url?: string;
  instagram_url?: string;
  maintenance_mode: boolean;
  maintenance_message?: string;
  allow_registration: boolean;
  require_email_verification: boolean;
  require_phone_verification: boolean;
  max_login_attempts: number;
  lockout_duration: number;
  password_min_length: number;
}

// ==================== أنواع النماذج ====================
export interface LoginForm {
  username: string;
  password: string;
  remember_me?: boolean;
}

export interface RegisterForm {
  username: string;
  email: string;
  password: string;
  confirm_password: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  user_type: UserType;
  governorate: number;
  national_id?: string;
  date_of_birth?: string;
  gender?: 'male' | 'female';
  agree_to_terms: boolean;
}

export interface ComplaintForm {
  category: number;
  complaint_type: number;
  title: string;
  description: string;
  location?: string;
  is_anonymous: boolean;
  is_public: boolean;
  attachments?: File[];
}

export interface MessageForm {
  recipient: number;
  subject: string;
  content: string;
  priority: MessagePriority;
  is_anonymous: boolean;
  attachments?: File[];
}

export interface RatingForm {
  member: number;
  rating: number;
  comment?: string;
  category: 'overall' | 'responsiveness' | 'effectiveness' | 'transparency' | 'accessibility';
  is_anonymous: boolean;
}

// ==================== أنواع الاستجابات ====================
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  errors?: Record<string, string[]>;
}

export interface PaginatedResponse<T> {
  count: number;
  next?: string;
  previous?: string;
  results: T[];
}

// ==================== أنواع الفلاتر ====================
export interface ComplaintFilters {
  status?: ComplaintStatus;
  category?: number;
  governorate?: number;
  priority?: ComplaintPriority;
  date_from?: string;
  date_to?: string;
  search?: string;
}

export interface MemberFilters {
  governorate?: number;
  party?: number;
  user_type?: 'candidate' | 'current_member';
  search?: string;
}

export interface MessageFilters {
  status?: MessageStatus;
  priority?: MessagePriority;
  date_from?: string;
  date_to?: string;
  search?: string;
}

// ==================== أنواع السياق ====================
export interface AuthContextType {
  user: User | null;
  profile: CitizenProfile | CandidateProfile | CurrentMemberProfile | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (credentials: LoginForm) => Promise<void>;
  register: (data: RegisterForm) => Promise<void>;
  logout: () => void;
  updateProfile: (data: any) => Promise<void>;
}

export interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export interface NotificationContextType {
  notifications: Notification[];
  addNotification: (notification: Omit<Notification, 'id' | 'timestamp'>) => void;
  removeNotification: (id: string) => void;
  clearNotifications: () => void;
}

export interface Notification {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message: string;
  timestamp: Date;
  autoClose?: boolean;
  duration?: number;
}
