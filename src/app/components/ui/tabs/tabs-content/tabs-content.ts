import { Component, input } from '@angular/core';

@Component({
  selector: 'app-tabs-content',
  standalone: true,
  templateUrl: './tabs-content.html',
  styleUrl: './tabs-content.css'
})
export class TabsContent {
  // Welcher Tab gehört zu diesem Inhalt? (z.B. "account" oder "password")
  value = input.required<string>();
  
  // Wir injizieren den Parent (Tabs) oder nutzen ein einfaches Attribut. 
  // Am saubersten und flexibelsten lösen wir das über ein übergeordnetes Layout oder ein einfaches Binding.
}