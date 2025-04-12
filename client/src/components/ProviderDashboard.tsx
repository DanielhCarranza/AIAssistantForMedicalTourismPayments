import { 
  Card, 
  CardContent,
  CardHeader 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Settings, HelpCircle } from "lucide-react";

interface RecentPayment {
  id: number;
  patient: string;
  procedure: string;
  amount: number;
  status: 'Completed' | 'Pending' | 'Failed';
  date: string;
}

const recentPayments: RecentPayment[] = [
  {
    id: 1,
    patient: "John C.",
    procedure: "Knee Surgery",
    amount: 5000,
    status: "Completed",
    date: "July 12, 2023"
  },
  {
    id: 2,
    patient: "Maria S.",
    procedure: "Dental Implants",
    amount: 2200,
    status: "Completed",
    date: "July 10, 2023"
  },
  {
    id: 3,
    patient: "David W.",
    procedure: "LASIK Surgery",
    amount: 1800,
    status: "Completed",
    date: "July 5, 2023"
  }
];

const ProviderDashboard = () => {
  return (
    <Card className="bg-white rounded-xl shadow-sm overflow-hidden">
      <CardHeader className="px-6 py-5 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800">Provider Dashboard</h2>
        <p className="text-sm text-gray-500 mt-1">Manage your patient payments and account</p>
      </CardHeader>
      
      <CardContent className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="col-span-2">
          <h3 className="font-medium text-gray-700 mb-4">Recent Payments</h3>
          <div className="bg-white border rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Procedure</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentPayments.map((payment) => (
                  <tr key={payment.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{payment.patient}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{payment.procedure}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${payment.amount.toLocaleString()}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        payment.status === 'Completed' ? 'bg-green-100 text-green-800' : 
                        payment.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
                        'bg-red-100 text-red-800'
                      }`}>
                        {payment.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{payment.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div>
          <h3 className="font-medium text-gray-700 mb-4">Account Summary</h3>
          <Card className="p-5 mb-6">
            <div className="mb-4">
              <span className="text-sm text-gray-500">Available Balance</span>
              <div className="text-2xl font-semibold mt-1">$9,000.00</div>
            </div>
            
            <div className="mb-4">
              <span className="text-sm text-gray-500">Monthly Earnings</span>
              <div className="text-xl font-medium mt-1">$12,300.00</div>
            </div>
            
            <div className="mb-4">
              <span className="text-sm text-gray-500">Pending Payments</span>
              <div className="text-xl font-medium mt-1">$3,400.00</div>
            </div>
            
            <Button className="mt-4 w-full">
              Withdraw Funds
            </Button>
          </Card>
          
          <Card className="p-5">
            <h3 className="font-medium text-gray-700 mb-3">Quick Actions</h3>
            
            <div className="space-y-2">
              <Button variant="ghost" className="w-full justify-start text-gray-700 bg-gray-100 hover:bg-gray-200 text-sm">
                <FileText className="h-4 w-4 mr-2" />
                Generate Statement
              </Button>
              <Button variant="ghost" className="w-full justify-start text-gray-700 bg-gray-100 hover:bg-gray-200 text-sm">
                <Settings className="h-4 w-4 mr-2" />
                Account Settings
              </Button>
              <Button variant="ghost" className="w-full justify-start text-gray-700 bg-gray-100 hover:bg-gray-200 text-sm">
                <HelpCircle className="h-4 w-4 mr-2" />
                Get Support
              </Button>
            </div>
          </Card>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProviderDashboard;
