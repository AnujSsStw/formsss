import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { z } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// CREATE TABLE IF NOT EXISTS bookings (
//     id SERIAL PRIMARY KEY,
//     arrest_time TIMESTAMP,
//     arrest_date DATE,
//     booking_date TIMESTAMP,
//     booking_number VARCHAR(50) UNIQUE,
//     last_name VARCHAR(100),
//     first_name VARCHAR(100),
//     middle_name VARCHAR(100),
//     street VARCHAR(200),
//     city VARCHAR(100),
//     state VARCHAR(50),
//     zip VARCHAR(20),
//     home_telephone VARCHAR(50),
//     military_status BOOLEAN,
//     sex VARCHAR(20),
//     race VARCHAR(50),
//     dob DATE,
//     age INTEGER,
//     height VARCHAR(20),
//     weight VARCHAR(20),
//     hair VARCHAR(50),
//     eyes VARCHAR(50),
//     place_of_birth VARCHAR(100),
//     drivers_license VARCHAR(50),
//     dl_state VARCHAR(50),
//     ssn VARCHAR(20),
//     employer VARCHAR(200),
//     occupation VARCHAR(100),
//     other_names TEXT,
//     emergency_contact VARCHAR(200),
//     emergency_relationship VARCHAR(100),
//     emergency_address TEXT,
//     emergency_phone VARCHAR(50),
//     tattoos_scars_marks TEXT,
//     arrest_agency VARCHAR(200),
//     agency_case_number VARCHAR(100),
//     arrest_location TEXT,
//     vehicle_disposition TEXT,
//     arresting_officer_id VARCHAR(50),
//     transporting_officer_id VARCHAR(50),
//     arrest_type VARCHAR(50),
//     charges JSONB,
//     victim_notification BOOLEAN,
//     victim_notification_form TEXT,
//     suicidal_behavior BOOLEAN,
//     vehicle_accident BOOLEAN,
//     non_law_enforcement BOOLEAN,
//     lost_consciousness BOOLEAN,
//     special_medical_needs BOOLEAN,
//     ok_to_book BOOLEAN,
//     tased BOOLEAN,
//     wrap_restraint BOOLEAN,
//     wrap_restraint_force BOOLEAN,
//     wrap_restraint_time_placed TIMESTAMP,
//     wrap_restraint_time_removed TIMESTAMP,
//     wrap_restraint_jail_transport BOOLEAN,
//     citation_release_denied BOOLEAN,
//     citation_release_reason TEXT,
//     or_release_recommended BOOLEAN,
//     or_release_reason TEXT,
//     approving_supervisor VARCHAR(100),
//     billing_info JSONB,
//     consular_notification_type VARCHAR(50),
//     consular_notification_country VARCHAR(100),
//     consular_notification_made_by VARCHAR(100),
//     consular_notification_time TIMESTAMP,
//     distribution_status JSONB,
//     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//     updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//     booking_distribution JSONB
// )

export const formSchema = z.object({
  arrest_time: z.string().optional(), // TIMESTAMP can be represented as a string for date/time
  arrest_date: z.string().optional(), // DATE can be represented as a string for date
  booking_date: z.string().optional(), // TIMESTAMP can be represented as a string for date/time
  booking_number: z.string().max(50).optional(),
  last_name: z.string().max(100).optional(),
  first_name: z.string().max(100).optional(),
  middle_name: z.string().max(100).optional(),
  street: z.string().max(200).optional(),
  city: z.string().max(100).optional(),
  state: z.string().max(50).optional(),
  zip: z.string().max(20).optional(),
  home_telephone: z.string().max(50).optional(),
  military_status: z.boolean().optional(),
  sex: z.string().max(20).optional(),
  race: z.string().max(50).optional(),
  dob: z.string().optional(), // DATE can be represented as a string for date
  age: z.number().optional(),
  height: z.string().max(20).optional(),
  weight: z.string().max(20).optional(),
  hair: z.string().max(50).optional(),
  eyes: z.string().max(50).optional(),
  place_of_birth: z.string().max(100).optional(),
  drivers_license: z.string().max(50).optional(),
  dl_state: z.string().max(50).optional(),
  ssn: z.string().max(20).optional(),
  employer: z.string().max(200).optional(),
  occupation: z.string().max(100).optional(),
  other_names: z.string().optional(), // TEXT can be represented as a string
  emergency_contact: z.string().max(200).optional(),
  emergency_relationship: z.string().max(100).optional(),
  emergency_address: z.string().optional(), // TEXT can be represented as a string
  emergency_phone: z.string().max(50).optional(),
  tattoos_scars_marks: z.string().optional(), // TEXT can be represented as a string
  arrest_agency: z.string().max(200).optional(),
  agency_case_number: z.string().max(100).optional(),
  arrest_location: z.string().optional(), // TEXT can be represented as a string
  vehicle_disposition: z.string().optional(), // TEXT can be represented as a string
  arresting_officer_id: z.string().max(50).optional(),
  transporting_officer_id: z.string().max(50).optional(),
  arrest_type: z.string().max(50).optional(),
  charges: z.array(z.unknown()).optional(), // JSONB can be represented as an array of unknowns
  victim_notification: z.boolean().optional(),
  victim_notification_form: z.string().optional(),
  suicidal_behavior: z.boolean().optional(),
  vehicle_accident: z.boolean().optional(),
  non_law_enforcement: z.boolean().optional(),
  lost_consciousness: z.boolean().optional(),
  special_medical_needs: z.boolean().optional(),
  ok_to_book: z.boolean().optional(),
  tased: z.boolean().optional(),
  wrap_restraint: z.boolean().optional(),
  wrap_restraint_force: z.boolean().optional(),
  wrap_restraint_time_placed: z.string().optional(), // TIMESTAMP can be represented as a string for date/time
  wrap_restraint_time_removed: z.string().optional(), // TIMESTAMP can be represented as a string for date/time
  wrap_restraint_jail_transport: z.boolean().optional(),
  citation_release_denied: z.boolean().optional(),
  citation_release_reason: z.string().optional(),
  or_release_recommended: z.boolean().optional(),
  or_release_reason: z.string().optional(),
  approving_supervisor: z.string().max(100).optional(),
  billing_info: z.array(z.unknown()).optional(), // JSONB can be represented as an array of unknowns
  consular_notification_type: z.string().max(50).optional(),
  consular_notification_country: z.string().max(100).optional(),
  consular_notification_made_by: z.string().max(100).optional(),
  consular_notification_time: z.string().optional(), // TIMESTAMP can be represented as a string for date/time
  distribution_status: z.array(z.unknown()).optional(), // JSONB can be represented as an array of unknowns
  created_at: z.string().optional(), // TIMESTAMP can be represented as a string for date/time
  updated_at: z.string().optional(), // TIMESTAMP can be represented as a string for date/time
  booking_distribution: z.array(z.unknown()).optional(), // JSONB can be represented as an array of unknowns
});
