import { 
  Card, 
  CardContent,
  CardHeader 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { providers, procedures } from "@/lib/mockData";
import { Clock } from "lucide-react";
import { Provider, Procedure } from "@/lib/mockData";

interface SelectProviderStepProps {
  selectedProvider: Provider | null;
  setSelectedProvider: (provider: Provider | null) => void;
  selectedProcedure: Procedure | null;
  setSelectedProcedure: (procedure: Procedure | null) => void;
  onContinue: () => void;
  onBack: () => void;
}

const SelectProviderStep = ({ 
  selectedProvider, 
  setSelectedProvider,
  selectedProcedure,
  setSelectedProcedure,
  onContinue,
  onBack
}: SelectProviderStepProps) => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Select Healthcare Provider</h2>
        
        <div className="bg-gray-100 rounded-full px-4 py-1 flex items-center space-x-2 text-sm">
          <Clock className="h-4 w-4 text-primary" />
          <span>Step 2 of 4</span>
        </div>
      </div>
      
      {!selectedProvider ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          {providers.map((provider) => (
            <Card 
              key={provider.id}
              className="overflow-hidden cursor-pointer hover:shadow-md transition"
              onClick={() => setSelectedProvider(provider)}
            >
              <img 
                src={provider.imageUrl} 
                alt={provider.name} 
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{provider.name}</h3>
                    <p className="text-gray-600 text-sm">{provider.location}</p>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm font-medium text-gray-700 ml-1">{provider.rating}</span>
                  </div>
                </div>
                
                <div className="mt-4">
                  <div className="text-sm text-gray-700 font-medium mb-1">Specialties:</div>
                  <div className="flex flex-wrap gap-2">
                    {provider.specialties.map((specialty, index) => (
                      <span key={index} className="px-2 py-1 bg-primary-100 text-primary-700 rounded text-xs">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="rounded-xl shadow-sm overflow-hidden mb-10">
          <CardHeader className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800">Select a Procedure</h3>
            <p className="text-gray-600 text-sm mt-1">Choose from available procedures at {selectedProvider.name}</p>
          </CardHeader>
          
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {procedures.map((procedure) => (
                <div 
                  key={procedure.id}
                  className={`border rounded-lg p-4 cursor-pointer hover:border-primary transition ${
                    selectedProcedure?.id === procedure.id ? 'border-primary bg-primary-50' : ''
                  }`}
                  onClick={() => setSelectedProcedure(procedure)}
                >
                  <img 
                    src={procedure.imageUrl} 
                    alt={procedure.name} 
                    className="w-full h-32 object-cover rounded-md mb-3"
                  />
                  <h4 className="font-medium text-gray-800">{procedure.name}</h4>
                  <p className="text-sm text-gray-500 mb-2">{procedure.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-primary-600 font-semibold">${procedure.cost.toLocaleString()}</span>
                    <span className="text-xs text-gray-500">{procedure.duration}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 flex justify-between items-center">
              <Button 
                variant="ghost"
                onClick={onBack}
              >
                Back to Providers
              </Button>
              
              <Button 
                variant="default"
                onClick={onContinue}
                disabled={!selectedProcedure}
                className={!selectedProcedure ? 'opacity-50 cursor-not-allowed' : ''}
              >
                Continue to Payment
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default SelectProviderStep;
