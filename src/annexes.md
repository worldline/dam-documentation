# Annexes

## Annex 1 - Assets fields

|Name|Mandatory|Editable|Description|Rules|
|----|---------|--------|-----------|-----|
|Asset name|Yes|No|Name of the asset||
|Reissuable|Yes|No|To define if assets can be issued||
|Quantity|Yes|No|Number of asset to issue at the asset creation||
|Fraction|Yes|No|If the asset has cents||
|Issuing address|Yes|No|||
|Beneficiary address|Yes|No|Address to send the assets issued||
|Maximum end user wallet balance|No|Yes|Maximum account that can be reach by an enduser wallet|numeric > 0|
|Asset expiration||No|No|To define if the assets have an expiration period||
|Expiration period|Yes if "asset expiration" if filled|Yes|Number of days before expiration after issuance|If the user update it, the assets previously issued are not impacted and keeps the value set at their issuance.|
|Transaction limit|No|No|To define if the assets have a limited transactions number to be consumed||
|Transaction count|Yes if "transaction limit" if filled|Yes|Max number of transactions to consume the assets after issuance|If the user update it, the assets previously issued are not impacted and keeps the value set at their issuance.|
|Code|Yes|Yes|Code used as a currency code|Between 3 and 5 alphanumerics characters. Special characters are authorised|
|Label|No|Yes|Display name used by the mobile application|20 char max|
|Logo|No|Yes|Logo of the assets. If not provided, a generic logo is generated|Format : png, jpg, jpeg, svg. Maximum size : 100ko|

## Annex 2 - Permissions and rights

| |Admin|Issuer Admin|Issuer Viewer|Merchant Admin|Merchant Viewer|Merchant Seller|
|-|-----|------------|-------------|--------------|---------------|---------------|
|<b>Asset management</b>|||||||
|asset-burn|	x	|x||||					
|asset-detail|	x	|x	|x	|||			
|asset-edit|	x	|x||||					
|asset-issue|	x	|x||||					
|asset-list|	x	|x	|x	|x	|x	|x	|x
|asset-reissue|	x	|x||||					
|<b>Billing management</b>|||||||
|bill-cancel|	x	|x		||x		||x	
|bill-consult|	x	|x	|x	|x	|x	|x	|x
|bill-create|	x	|x	|	|x	|	|x	|
|bill-pay|			|	|	|	|	|x|
|bill-list|	x	|x	|x	|x	|x	|x	|x
|<b>Cash-out management</b>|||||||
|cashout-list|	|x	|x	|x	|x	|x	|	|x
|cashout-refuse|	x	|x					
|cashout-validate|	x	|x					
|merchant-cashout|		|		|x			
|merchant-reconciliation|	x	|x					
|<b>Enduser management</b>|||||||
|enduser-delete|	x	|x					
|enduser-detail|	x	|x	|x				
|enduser-edit|	x	|x					
|enduser-list|	x	|x	|x				
|enduser-view|	x	|x	|x								
|<b>Loyalty program management</b>|||||||
|loyaltyProgram-create|	x	|x					
|loyaltyProgram-delete|	x	|x					
|loyaltyProgram-edit|	x	|x					
|loyaltyProgram-list|	x	|x	|x				
|<b>Organisation management</b>|||||||
|org-create|	x	|x					
|org-delete|	x	|x					
|org-detail|	x	|x	|x	|x	|x		
|org-edit|	x	|x	|	|x			
|org-list|	x	|x	|x	|x	|x		
|org-view|	x	|x	|x	|x	|x		
|<b>User management</b>|||||||
|user-create|	x	|x	|	|x			
|user-delete|	x	|x	|	|x			
|user-detail|	x	|x	|x	|x	|x		
|user-edit|	x	|x	|	|x			
|user-list|	x	|x	|x	|x	|x		
|user-view|	x	|x	|x	|x	|x		
|<b>Wallet management</b>|||||||
|wallet-close|	x	|x	|	|x			
|wallet-create|	x	|x	|	|x			
|wallet-detail|	x	|x	|x	|x	|x	|x	|x
|wallet-edit|	x	|x	|	|x	|	|	|x
|wallet-list|	x	|x	|x	|x	|x	|x	
|wallet-view|	x	|x	|x	|x	|x	|x	
|<b>Transaction management</b>|||||||
|tx-detail|	x	|x	|x	|x	|x	|	|x
|tx-create|	x	|x	|	|x	|	|	|x
|tx-list|	x	|x	|x	|x	|x	|	|x
|tx-view|	x	|x	|x	|x	|x	|	|x
|reconciliation-list|	x	|x					
|order-list|	x	|x	|x	|	|	|	|x
