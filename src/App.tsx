import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { formSchema } from "./lib/utils";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Button } from "./components/ui/button";

interface FormEntry {
  id: number;
  charges: string;
  mf: string;
  narrative: string;
  court: string;
  warrantNumber: string;
  bail: string;
}

function App() {
  /*
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  **/

  const [formData, setFormData] = useState({});
  const [entries, setEntries] = useState<FormEntry[]>([]);
  const [newEntry, setNewEntry] = useState<FormEntry>({
    id: Date.now(),
    charges: "",
    mf: "",
    narrative: "",
    court: "",
    warrantNumber: "",
    bail: "",
  });

  const addEntry = () => {
    if (!newEntry.charges) return;
    setEntries([...entries, newEntry]);
    setNewEntry({
      id: Date.now(),
      charges: "",
      mf: "",
      narrative: "",
      court: "",
      warrantNumber: "",
      bail: "",
    });
  };

  const updateNewEntry = (key: keyof FormEntry, value: string) => {
    setNewEntry({ ...newEntry, [key]: value });
  };

  const removeEntry = (id: number) => {
    setEntries(entries.filter((entry) => entry.id !== id));
  };

  const handleInputChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form submitted:", formData, entries);
    // Here you would typically send the data to your backend
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-8 max-w-6xl mx-auto p-4">
        <Card>
          <CardHeader className="flex items-center">
            <CardTitle>
              Riverside County Sheriff's Office Booking Form
            </CardTitle>
            <CardDescription>
              Enter booking information for the arrestee
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Arrest and Booking Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">
                Arrest and Booking Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="arrest_date">Arrest Date/Time</Label>
                  <Input
                    type="datetime-local"
                    id="arrest_time"
                    name="arrest_time"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="booking_date">Booking Date</Label>
                  <Input
                    type="datetime-local"
                    id="booking_date"
                    name="booking_date"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="booking_number">Booking Number</Label>
                  <Input
                    type="text"
                    id="booking_number"
                    name="booking_number"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            {/* Personal Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="last_name">Last Name</Label>
                  <Input
                    type="text"
                    id="last_name"
                    name="last_name"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="first_name">First Name</Label>
                  <Input
                    type="text"
                    id="first_name"
                    name="first_name"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="middle_name">Middle Name</Label>
                  <Input
                    type="text"
                    id="middle_name"
                    name="middle_name"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="street">Street</Label>
                  <Input
                    type="text"
                    id="street"
                    name="street"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input
                    type="text"
                    id="city"
                    name="city"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">State</Label>
                  <Input
                    type="text"
                    id="state"
                    name="state"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="zip">ZIP</Label>
                  <Input
                    type="text"
                    id="zip"
                    name="zip"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="home_telephone">Home Telephone</Label>
                  <Input
                    type="tel"
                    id="home_telephone"
                    name="home_telephone"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Label>Military Status</Label>
                  <RadioGroup
                    name="military_status"
                    onValueChange={(value) =>
                      handleInputChange({
                        target: { name: "military_status", value },
                      })
                    }
                    className="flex gap-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="true" id="military_yes" />
                      <Label htmlFor="military_yes">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="false" id="military_no" />
                      <Label htmlFor="military_no">No</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="sex">Sex</Label>
                  <Select
                    name="sex"
                    onValueChange={(value) =>
                      handleInputChange({ target: { name: "sex", value } })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select sex" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="race">Race</Label>
                  <Input
                    type="text"
                    id="race"
                    name="race"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dob">Date of Birth</Label>
                  <Input
                    type="date"
                    id="dob"
                    name="dob"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="age">Age</Label>
                  <Input
                    type="number"
                    id="age"
                    name="age"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="height">Height</Label>
                  <Input
                    type="text"
                    id="height"
                    name="height"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="weight">Weight</Label>
                  <Input
                    type="text"
                    id="weight"
                    name="weight"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="hair">Hair Color</Label>
                  <Input
                    type="text"
                    id="hair"
                    name="hair"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="eyes">Eye Color</Label>
                  <Input
                    type="text"
                    id="eyes"
                    name="eyes"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="place_of_birth">Place of Birth</Label>
                  <Input
                    type="text"
                    id="place_of_birth"
                    name="place_of_birth"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            {/* Identification */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Identification</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="drivers_license">Driver's License</Label>
                  <Input
                    type="text"
                    id="drivers_license"
                    name="drivers_license"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dl_state">DL State</Label>
                  <Input
                    type="text"
                    id="dl_state"
                    name="dl_state"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ssn">SSN</Label>
                  <Input
                    type="text"
                    id="ssn"
                    name="ssn"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            {/* Employment */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Employment</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="employer">Employer</Label>
                  <Input
                    type="text"
                    id="employer"
                    name="employer"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="occupation">Occupation</Label>
                  <Input
                    type="text"
                    id="occupation"
                    name="occupation"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            {/* Additional Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Additional Information</h3>
              <div className="space-y-2">
                <Label htmlFor="other_names">Other Names</Label>
                <Textarea
                  id="other_names"
                  name="other_names"
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="tattoos_scars_marks">
                  Tattoos, Scars, Marks
                </Label>
                <Textarea
                  id="tattoos_scars_marks"
                  name="tattoos_scars_marks"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            {/* Emergency Contact */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Emergency Contact</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="emergency_contact">Name</Label>
                  <Input
                    type="text"
                    id="emergency_contact"
                    name="emergency_contact"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="emergency_relationship">Relationship</Label>
                  <Input
                    type="text"
                    id="emergency_relationship"
                    name="emergency_relationship"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="emergency_address">Address</Label>
                  <Textarea
                    id="emergency_address"
                    name="emergency_address"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="emergency_phone">Phone</Label>
                  <Input
                    type="tel"
                    id="emergency_phone"
                    name="emergency_phone"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            {/* Arrest Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Arrest Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="arrest_agency">Arrest Agency</Label>
                  <Input
                    type="text"
                    id="arrest_agency"
                    name="arrest_agency"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="agency_case_number">Agency Case Number</Label>
                  <Input
                    type="text"
                    id="agency_case_number"
                    name="agency_case_number"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="arrest_location">Arrest Location</Label>
                  <Textarea
                    id="arrest_location"
                    name="arrest_location"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="vehicle_disposition">
                    Vehicle Disposition
                  </Label>
                  <Textarea
                    id="vehicle_disposition"
                    name="vehicle_disposition"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="arresting_officer_id">
                    Arresting Officer ID
                  </Label>
                  <Input
                    type="text"
                    id="arresting_officer_id"
                    name="arresting_officer_id"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="transporting_officer_id">
                    Transporting Officer ID
                  </Label>
                  <Input
                    type="text"
                    id="transporting_officer_id"
                    name="transporting_officer_id"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            {/* Charges */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Booking Charges</h3>
              <div className="flex gap-2">
                <Label>Type of Arrest</Label>
                <RadioGroup defaultValue="option-one" className="flex">
                  <div className="flex  items-center space-x-2">
                    <RadioGroupItem value="on-view" id="on-view" />
                    <Label htmlFor="on-view">On View</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="warrent" id="warrent" />
                    <Label htmlFor="warrent">Warrant</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="citizen" id="citizen" />
                    <Label htmlFor="citizen">Citizen</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="other" id="other" />
                    <Label htmlFor="other">Other</Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="space-y-2">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Charges</TableHead>
                      <TableHead>M/F</TableHead>
                      <TableHead>Narrative</TableHead>
                      <TableHead>Court</TableHead>
                      <TableHead>Warrant#</TableHead>
                      <TableHead>Bail</TableHead>
                      <TableHead>Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {entries.map((entry) => (
                      <TableRow key={entry.id}>
                        <TableCell>{entry.charges}</TableCell>
                        <TableCell>{entry.mf}</TableCell>
                        <TableCell>{entry.narrative}</TableCell>
                        <TableCell>{entry.court}</TableCell>
                        <TableCell>{entry.warrantNumber}</TableCell>
                        <TableCell>{entry.bail}</TableCell>
                        <TableCell>
                          <Button
                            type="button"
                            variant="destructive"
                            onClick={() => removeEntry(entry.id)}
                          >
                            Remove
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                    <TableRow>
                      <TableCell>
                        <Input
                          value={newEntry.charges}
                          onChange={(e) =>
                            updateNewEntry("charges", e.target.value)
                          }
                          placeholder="Charges"
                        />
                      </TableCell>
                      <TableCell>
                        <Select
                          value={newEntry.mf}
                          onValueChange={(value) => updateNewEntry("mf", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="M/F" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="M">Male</SelectItem>
                            <SelectItem value="F">Female</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell>
                        <Input
                          value={newEntry.narrative}
                          onChange={(e) =>
                            updateNewEntry("narrative", e.target.value)
                          }
                          placeholder="Narrative"
                        />
                      </TableCell>
                      <TableCell>
                        <Input
                          value={newEntry.court}
                          onChange={(e) =>
                            updateNewEntry("court", e.target.value)
                          }
                          placeholder="Court"
                        />
                      </TableCell>
                      <TableCell>
                        <Input
                          value={newEntry.warrantNumber}
                          onChange={(e) =>
                            updateNewEntry("warrantNumber", e.target.value)
                          }
                          placeholder="Warrant#"
                        />
                      </TableCell>
                      <TableCell>
                        <Input
                          value={newEntry.bail}
                          onChange={(e) =>
                            updateNewEntry("bail", e.target.value)
                          }
                          placeholder="Bail"
                        />
                      </TableCell>
                      <TableCell>
                        <Button type="button" onClick={addEntry}>
                          Add
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
            {/* Victim Notification */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">
                DOMESTIC VIOLENCE NOTIFICATION - PER 646.92 PC
              </h3>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="victim_notification"
                  name="victim_notification"
                  onCheckedChange={(checked) =>
                    handleInputChange({
                      target: {
                        name: "victim_notification",
                        type: "checkbox",
                        checked,
                      },
                    })
                  }
                />
                <Label htmlFor="victim_notification">
                  Victim requesting notification
                </Label>
              </div>
              <div className="space-y-2">
                If "YES," attach RSD Form 569, "Notification of Release" Form,
                to Receiving Sheet
              </div>
            </div>

            {/* Medical and Safety Concerns */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">
                Medical and Safety Concerns
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="suicidal_behavior"
                    name="suicidal_behavior"
                    onCheckedChange={(checked) =>
                      handleInputChange({
                        target: {
                          name: "suicidal_behavior",
                          type: "checkbox",
                          checked,
                        },
                      })
                    }
                  />
                  <Label htmlFor="suicidal_behavior">
                    Displayed suicidal behavior?
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="vehicle_accident"
                    name="vehicle_accident"
                    onCheckedChange={(checked) =>
                      handleInputChange({
                        target: {
                          name: "vehicle_accident",
                          type: "checkbox",
                          checked,
                        },
                      })
                    }
                  />
                  <Label htmlFor="vehicle_accident">
                    Involved in a Vehicle Accident?
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="lost_consciousness"
                    name="lost_consciousness"
                    onCheckedChange={(checked) =>
                      handleInputChange({
                        target: {
                          name: "lost_consciousness",
                          type: "checkbox",
                          checked,
                        },
                      })
                    }
                  />
                  <Label htmlFor="lost_consciousness">
                    Did arrestee ever lose consciousness?
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="non_law_enforcement"
                    name="non_law_enforcement"
                    onCheckedChange={(checked) =>
                      handleInputChange({
                        target: {
                          name: "non_law_enforcement",
                          type: "checkbox",
                          checked,
                        },
                      })
                    }
                  />
                  <Label htmlFor="non_law_enforcement">
                    Fought with other than Law Enforcement?
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="special_housing_needs"
                    name="special_housing_needs"
                    onCheckedChange={(checked) =>
                      handleInputChange({
                        target: {
                          name: "special_housing_needs",
                          type: "checkbox",
                          checked,
                        },
                      })
                    }
                  />
                  <Label htmlFor="special_housing_needs">
                    Are there any special housing needs?
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="ok_to_book"
                    name="ok_to_book"
                    onCheckedChange={(checked) =>
                      handleInputChange({
                        target: {
                          name: "ok_to_book",
                          type: "checkbox",
                          checked,
                        },
                      })
                    }
                  />
                  <Label htmlFor="ok_to_book">
                    Did arrestee require an O.K. to book?
                  </Label>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="suicidal_behavior_explanation">
                  Explanation (if yes)
                </Label>
                <Textarea
                  id="suicidal_behavior_explanation"
                  name="suicidal_behavior_explanation"
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/* Restraint Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">
                Wrap Restraint Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="wrap_restraint"
                    name="wrap_restraint"
                    onCheckedChange={(checked) =>
                      handleInputChange({
                        target: {
                          name: "wrap_restraint",
                          type: "checkbox",
                          checked,
                        },
                      })
                    }
                  />
                  <Label htmlFor="wrap_restraint">
                    Was arrestee placed in WRAP Restraint?
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="wrap_restraint_force"
                    name="wrap_restraint_force"
                    onCheckedChange={(checked) =>
                      handleInputChange({
                        target: {
                          name: "wrap_restraint_force",
                          type: "checkbox",
                          checked,
                        },
                      })
                    }
                  />
                  <Label htmlFor="wrap_restraint_force">
                    Was force used to place arrestee in WRAP Restraint?
                  </Label>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="wrap_restraint_time_placed">
                    Time of Placement
                  </Label>
                  <Input
                    type="time"
                    id="wrap_restraint_time_placed"
                    name="wrap_restraint_time_placed"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="wrap_restraint_time_removed">
                    Time Removed
                  </Label>
                  <Input
                    type="time"
                    id="wrap_restraint_time_removed"
                    name="wrap_restraint_time_removed"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="wrap_restraint_jail_transport"
                    name="wrap_restraint_jail_transport"
                    onCheckedChange={(checked) =>
                      handleInputChange({
                        target: {
                          name: "wrap_restraint_jail_transport",
                          type: "checkbox",
                          checked,
                        },
                      })
                    }
                  />
                  <Label htmlFor="wrap_restraint_jail_transport">
                    Was arrestee transported to the jail in the WRAP?
                  </Label>
                </div>
              </div>
            </div>

            {/* Release Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Release Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="citation_release_denied"
                    name="citation_release_denied"
                    onCheckedChange={(checked) =>
                      handleInputChange({
                        target: {
                          name: "citation_release_denied",
                          type: "checkbox",
                          checked,
                        },
                      })
                    }
                  />
                  <Label htmlFor="citation_release_denied">
                    Citation Release Denied?
                  </Label>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="approving_supervisor">
                    Approving Supervisor
                  </Label>
                  <Input
                    type="text"
                    id="approving_supervisor"
                    name="approving_supervisor"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="citation_release_reason">Reason Denied</Label>
                  <Textarea
                    id="citation_release_reason"
                    name="citation_release_reason"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="or_release_recommended"
                    name="or_release_recommended"
                    onCheckedChange={(checked) =>
                      handleInputChange({
                        target: {
                          name: "or_release_recommended",
                          type: "checkbox",
                          checked,
                        },
                      })
                    }
                  />
                  <Label htmlFor="or_release_recommended">
                    Recommendation for O.R. Release?
                  </Label>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="citation_release_reason">Reason Denied</Label>
                  <Textarea
                    id="citation_release_reason"
                    name="citation_release_reason"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="notify_arresting_agency"
                    name="notify_arresting_agency"
                    onCheckedChange={(checked) =>
                      handleInputChange({
                        target: {
                          name: "notify_arresting_agency",
                          type: "checkbox",
                          checked,
                        },
                      })
                    }
                  />
                  <Label htmlFor="notify_arresting_agency">
                    Arresting Agency to be notified upon release of prisoner?
                  </Label>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="notification_contact">
                    Person & 24 hr Phone #
                  </Label>
                  <Input
                    type="text"
                    id="notification_contact"
                    name="notification_contact"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="consular_notification_time">
                    Agency contact time & Date
                  </Label>
                  <Input
                    type="datetime-local"
                    id="consular_notification_time"
                    name="consular_notification_time"
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <Label htmlFor="consular_notification_who_contacted">
                    Who was contacted?
                  </Label>
                  <Input
                    type="text"
                    id="consular_notification_who_contacted"
                    name="consular_notification_who_contacted"
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <Label htmlFor="consular_notification_by_whom">By whom</Label>
                  <Input
                    type="text"
                    id="consular_notification_by_whom"
                    name="consular_notification_by_whom"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            {/* Consular Notification */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">
                Consular Notification - PER P&P 504.33
              </h3>
              <div className="flex gap-4">
                <Label>Notification Type</Label>
                <RadioGroup
                  name="consular_notification_type"
                  onValueChange={(value) =>
                    handleInputChange({
                      target: { name: "consular_notification_type", value },
                    })
                  }
                  className="flex"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="mandatory"
                      id="notification_mandatory"
                    />
                    <Label htmlFor="notification_mandatory">Mandatory</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="requested"
                      id="notification_requested"
                    />
                    <Label htmlFor="notification_requested">Requested</Label>
                  </div>
                </RadioGroup>
              </div>
              <div>
                <Label htmlFor="consular_notification_country">Country</Label>
                <Input
                  type="text"
                  id="consular_notification_country"
                  name="consular_notification_country"
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <Label htmlFor="consular_notification_made_by">
                  Name/ID# of person making notification
                </Label>
                <Input
                  type="text"
                  id="consular_notification_made_by"
                  name="consular_notification_made_by"
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/* Officer */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Officers</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="approving_supervisor">
                    Arresting Officer
                  </Label>
                  <Input
                    type="text"
                    id="approving_supervisor"
                    name="approving_supervisor"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="reviewed_by">Booking Officer</Label>
                  <Input
                    type="text"
                    id="reviewed_by"
                    name="reviewed_by"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            {/* Approval and Billing */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">
                Billing Information (For Business Office Use Only)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="approving_supervisor">On-sight</Label>
                  <Input
                    type="text"
                    id="approving_supervisor"
                    name="approving_supervisor"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="reviewed_by">Agency Case Number</Label>
                  <Input
                    type="text"
                    id="reviewed_by"
                    name="reviewed_by"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="send_bill_to">
                    Riverside County Warrant Number
                  </Label>
                  <Input
                    type="text"
                    id="send_bill_to"
                    name="send_bill_to"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="originative_police_agency">
                    Originative Police Agency
                  </Label>
                  <Input
                    type="text"
                    id="originative_police_agency"
                    name="originative_police_agency"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="originative_police_agency">Reviewed by</Label>
                  <Input
                    type="text"
                    id="originative_police_agency"
                    name="originative_police_agency"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="originative_police_agency">
                    Send Bill to
                  </Label>
                  <Input
                    type="text"
                    id="originative_police_agency"
                    name="originative_police_agency"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Additional Information</h3>
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full">
              Submit Booking Form
            </Button>
          </CardFooter>
        </Card>
      </form>
    </>
  );
}

export default App;
